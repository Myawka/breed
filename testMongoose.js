const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
const Breed = mongoose.model('Breed', { name: String });
const kitty = new Breed({ name: 'Кошка' });
kitty.save().then(() => console.log('Мур-мяу'));