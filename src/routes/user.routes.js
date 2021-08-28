const express = require("express");
const routes = express.Router();

const UserController = require("../controllers/user.controller");

routes.post("/users", UserController.store);

module.exports = routes;