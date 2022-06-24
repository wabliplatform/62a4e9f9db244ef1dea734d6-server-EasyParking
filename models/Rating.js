
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
Underscoreid:String 



})

module.exports = {
  Rating : mongoose.model('rating', ratingSchema),
}

