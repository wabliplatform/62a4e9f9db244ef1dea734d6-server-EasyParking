/**
 * The PaymentController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/PaymentService');
const createpayment = async (request, response) => {
  await Controller.handleRequest(request, response, service.createpayment);
};

const deletepayment = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletepayment);
};

const getAllpayment = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllpayment);
};

const getpayment = async (request, response) => {
  await Controller.handleRequest(request, response, service.getpayment);
};

const updatepayment = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatepayment);
};


module.exports = {
  createpayment,
  deletepayment,
  getAllpayment,
  getpayment,
  updatepayment,
};
