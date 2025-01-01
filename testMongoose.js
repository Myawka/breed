const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var Breed = require('./models/breed.js').Breed

var breed = new Breed({
    title: "Манчкин",
    nick: "manchkin",
})

breed.save();