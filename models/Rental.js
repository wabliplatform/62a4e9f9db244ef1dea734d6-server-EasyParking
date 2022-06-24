
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
Underscoreid:String , 


VehicleType:String , 


RentStart:String , 


RentEnd:String 



})

module.exports = {
  Rental : mongoose.model('rental', rentalSchema),
}

