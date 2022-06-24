/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Payment } = require('../models/Payment');

/**
* Creates the data
*
* payment Payment data to be created
* returns payment
* */
const createpayment = ({ payment }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Payment(payment).save();
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
* paymentId String the Id parameter
* no response value expected for this operation
* */
const deletepayment = ({ paymentId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Payment.findOneAndDelete({ _id:paymentId }).exec();
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
const getAllpayment = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Payment.find().exec();
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
* paymentId String the Id parameter
* returns payment
* */
const getpayment = ({ paymentId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Payment.findById(paymentId)
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
* paymentId String the Id parameter
* payment Payment data to be updated (optional)
* returns payment
* */
const updatepayment = ({ paymentId, payment }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Payment.findOneAndUpdate({ _id:paymentId },payment).exec();
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
  createpayment,
  deletepayment,
  getAllpayment,
  getpayment,
  updatepayment,
};
