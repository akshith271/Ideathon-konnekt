const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/events', function(req, res, next) {
	res.render('events');
});

module.exports = router;
