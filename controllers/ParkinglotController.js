/**
 * The ParkinglotController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ParkinglotService');
const createparkinglot = async (request, response) => {
  await Controller.handleRequest(request, response, service.createparkinglot);
};

const deleteparkinglot = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteparkinglot);
};

const getAllparkinglot = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllparkinglot);
};

const getparkinglot = async (request, response) => {
  await Controller.handleRequest(request, response, service.getparkinglot);
};

const updateparkinglot = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateparkinglot);
};


module.exports = {
  createparkinglot,
  deleteparkinglot,
  getAllparkinglot,
  getparkinglot,
  updateparkinglot,
};
