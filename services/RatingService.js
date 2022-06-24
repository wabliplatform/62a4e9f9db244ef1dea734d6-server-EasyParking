/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Rating } = require('../models/Rating');

/**
* Creates the data
*
* rating Rating data to be created
* returns rating
* */
const createrating = ({ rating }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Rating(rating).save();
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
* ratingId String the Id parameter
* no response value expected for this operation
* */
const deleterating = ({ ratingId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Rating.findOneAndDelete({ _id:ratingId }).exec();
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
const getAllrating = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Rating.find().exec();
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
* ratingId String the Id parameter
* returns rating
* */
const getrating = ({ ratingId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Rating.findById(ratingId)
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
* ratingId String the Id parameter
* rating Rating data to be updated (optional)
* returns rating
* */
const updaterating = ({ ratingId, rating }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Rating.findOneAndUpdate({ _id:ratingId },rating).exec();
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
  createrating,
  deleterating,
  getAllrating,
  getrating,
  updaterating,
};
