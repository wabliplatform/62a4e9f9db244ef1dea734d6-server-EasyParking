/**
 * The RentalController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/RentalService');
const createrental = async (request, response) => {
  await Controller.handleRequest(request, response, service.createrental);
};

const deleterental = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleterental);
};

const getAllrental = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllrental);
};

const getrental = async (request, response) => {
  await Controller.handleRequest(request, response, service.getrental);
};

const updaterental = async (request, response) => {
  await Controller.handleRequest(request, response, service.updaterental);
};


module.exports = {
  createrental,
  deleterental,
  getAllrental,
  getrental,
  updaterental,
};
