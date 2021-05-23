
const express = require('express');
const router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('marketplace', {category : 'all', route : 'all'});
});
router.get('/:category', function(req, res, next) {
	const category = req.params.category;
	res.render('marketplace', {category : category});
});


// router.get('/aprons', function(req, res, next) {
// // 	res.render('marketplace', {category : "Apron" , route : 'aprons'});
// // });
// // router.get('/tools', function(req, res, next) {
// // 	res.render('marketplace', {category : "Tool", route : 'tools'});
// // });

module.exports = router;
