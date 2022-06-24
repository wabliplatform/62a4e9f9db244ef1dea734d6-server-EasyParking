
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
Underscoreid:String , 


FirstName:String , 


LastName:String , 


Email:String , 


PhoneNumber:Number , 


ShFirstName:String , 


ShLastName:String , 


ShEmail:String , 


ShPhoneNumber:Number , 


ShAddress:String , 


ShZipCode:Number , 


Notes:String , 


PaymentMethod:String 



})

module.exports = {
  Payment : mongoose.model('payment', paymentSchema),
}

