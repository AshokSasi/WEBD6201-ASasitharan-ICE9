import express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. - home route */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. - about route */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});
/* GET projects page. - projects route */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});
/* GET Services page. - about Services */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});
/* GET contact us page. - contact us route */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Us' });
});
/* GET login page. - login route */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login' });
});
module.exports = router;
