/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Parkinglot } = require('../models/Parkinglot');

/**
* Creates the data
*
* parkinglot Parkinglot data to be created
* returns parkinglot
* */
const createparkinglot = ({ parkinglot }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Parkinglot(parkinglot).save();
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
* parkinglotId String the Id parameter
* no response value expected for this operation
* */
const deleteparkinglot = ({ parkinglotId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Parkinglot.findOneAndDelete({ _id:parkinglotId }).exec();
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
const getAllparkinglot = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Parkinglot.find().exec();
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
* parkinglotId String the Id parameter
* returns parkinglot
* */
const getparkinglot = ({ parkinglotId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Parkinglot.findById(parkinglotId)
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
* parkinglotId String the Id parameter
* parkinglot Parkinglot data to be updated (optional)
* returns parkinglot
* */
const updateparkinglot = ({ parkinglotId, parkinglot }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Parkinglot.findOneAndUpdate({ _id:parkinglotId },parkinglot).exec();
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
  createparkinglot,
  deleteparkinglot,
  getAllparkinglot,
  getparkinglot,
  updateparkinglot,
};
