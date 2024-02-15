const express = require("express");
const Route = express.Router();
const testingUser = require('../controller/user.controller');


Route.route('/t1').get(testingUser)


module.exports = Route;