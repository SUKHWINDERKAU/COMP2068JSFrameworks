npx express-generator express-site --view=ejs
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Welcome' });
});

router.get('/taylor', function(req, res) {
  res.render('taylor');
});

router.get('/drake', function(req, res) {
  res.render('drake');
});

router.get('/billie', function(req, res) {
  res.render('billie');
});

router.get('/weeknd', function(req, res) {
  res.render('weeknd');
});

module.exports = router;
