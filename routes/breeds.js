var express = require('express');
var router = express.Router();
var Breed = require('../models/breed').Breed;

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с breeds');
});

/* Страница пород */
router.get("/:nick", async function (req, res, next) {
  var breeds = await Breed.find({ nick: req.params.nick });
  console.log(breeds)
  if (!breeds.length) return next(new Error("Порода не найдена на сайте"))
  var breed = breeds[0];
  res.render('breed', {
    title: breed.title,
    picture: breed.avatar,
    desc: breed.desc
  })
});

module.exports = router;
