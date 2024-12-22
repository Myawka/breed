var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/manchkin', function(req, res, next) {
  res.send("<h1>Страница Манчкина</h1>")
  });

router.get('/meinkun', function(req, res, next) {
  res.send("<h1>Страница Мейнкуна</h1>")
    });

router.get('/ragdoll', function(req, res, next) {
  res.send("<h1>Страница Рэгдолл</h1>")
    });

router.get('/sfinks', function(req, res, next) {
  res.send("<h1>Страница Сфинкса</h1>")

  });

router.get('/siamskaya', function(req, res, next) {
  res.send("<h1>Страница Сиамской</h1>")
    });

router.get('/vislouhaya', function(req, res, next) {
  res.send("<h1>Страница вислоухой</h1>")
    });    

module.exports = router;
