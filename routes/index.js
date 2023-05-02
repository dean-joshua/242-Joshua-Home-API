const routes = require('express').Router();
const { getPersonalData } = require('../controllers/');

routes.get('/', getPersonalData);

module.exports = routes;