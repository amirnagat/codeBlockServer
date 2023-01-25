const routes = require('express').Router();
const controller = require('../controllers/userController');


routes.route('/api/register')
    .post(controller.create_User)

routes.route('/api/login')
    .post(controller.login)

module.exports = routes;

