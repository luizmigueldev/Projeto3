const express = require("express");
const routes = express.Router();

const LoginController = require("../controllers/login.controllers");

routes.post("/login", LoginController.store);

module.exports = routes;