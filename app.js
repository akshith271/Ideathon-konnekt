const express = require('express');
const { collection } = require('./models/user');
const path = require('path');
mongoose = require('mongoose');
app = express();
passport = require('passport');
bodyParser = require('body-parser');
LocalStrategy = require('passport-local');
passportLocalMongoose = require('passport-local-mongoose');
User = require('./models/user');
// Connecting to database
// mongoose.connect('mongodb://localhost/konnekt');
// app.use(
//     require('express-session')({
//         secret: 'Any normal Word', //decode or encode session
//         resave: false,
//         saveUninitialized: false,
//     })
// );

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
//node-sass
const sassMiddleware = require('node-sass-middleware');
app.use(sassMiddleware({
    src: path.join(__dirname, 'public', 'styles', 'css'),
    dest: path.join(__dirname, 'public', 'styles', 'css'),
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public/')));
app.use(express.static(path.join(__dirname, 'public', 'scripts')));
app.use(express.static(path.join(__dirname, 'public', 'styles','css')));

app.use(bodyParser.json());



//routes
const homeRouter = require('./routes/home');
app.use('/', homeRouter);

const marketplaceRouter = require('./routes/marketplace');
app.use('/marketplace', marketplaceRouter);

const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

//Authentication
passport = require('passport');
passport.serializeUser(User.serializeUser()); //session encoding
passport.deserializeUser(User.deserializeUser()); //session decoding
passport.use(new LocalStrategy(User.authenticate()));

app.use(passport.initialize());
app.use(passport.session());

app.post(
    '/',
    passport.authenticate('local', {
        successRedirect: '/marketplace',
        failureRedirect: '/',
    }),
    function (req, res) {}
);

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    User.register(
        new User({
            username: req.body.username,
            phone: req.body.phone,
        }),
        req.body.password,
        function (err, user) {
            if (err) {
                console.log(err);
                res.render('register');
            }
            passport.authenticate('local')(req, res, function () {
                res.redirect('/');
            });
        }
    );
});

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}


// Listen on Server

app.listen(process.env.PORT || 3000, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Server started at 3000');
    }
});

module.exports = app;
