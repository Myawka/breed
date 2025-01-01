const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var schema = mongoose.Schema({ name: String })
schema.methods.meow = function(){
console.log(this.name + " мурлычет")
}
const Breed = mongoose.model('Breed', schema);
const cat = new Breed({ name: 'Кошка' });
cat.save().then(() => cat.meow());