/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Rental } = require('../models/Rental');

/**
* Creates the data
*
* rental Rental data to be created
* returns rental
* */
const createrental = ({ rental }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Rental(rental).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* rentalId String the Id parameter
* no response value expected for this operation
* */
const deleterental = ({ rentalId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Rental.findOneAndDelete({ _id:rentalId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllrental = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Rental.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* rentalId String the Id parameter
* returns rental
* */
const getrental = ({ rentalId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Rental.findById(rentalId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* rentalId String the Id parameter
* rental Rental data to be updated (optional)
* returns rental
* */
const updaterental = ({ rentalId, rental }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Rental.findOneAndUpdate({ _id:rentalId },rental).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createrental,
  deleterental,
  getAllrental,
  getrental,
  updaterental,
};
