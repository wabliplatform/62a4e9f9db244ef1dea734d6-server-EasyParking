
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parkinglotSchema = new Schema({
Underscoreid:String , 


Rating:Number , 


DistanceToDestination:String , 


ParkingLotName:String , 


ParkingLotAddress:String , 


ParkingLotPrice:Number , 


RentingType:String 



})

module.exports = {
  Parkinglot : mongoose.model('parkinglot', parkinglotSchema),
}

