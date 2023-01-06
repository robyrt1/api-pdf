const express = require("express");
const routes = require("../routers/index.js");
class ExpressConfig {
  constructor() {
    if (!ExpressConfig._instance) ExpressConfig._instance = this;

    this.init();
  }

  getInstance() {
    return ExpressConfig._instance;
  }

  setServer() {
    if (!this.getInstance().app) this.getInstance().app = express();
  }
  getServer() {
    return this.getInstance().app;
  }
  setMiddlewares(middlewares) {
    middlewares.forEach((middleware) => this.getServer().use(middleware));
  }
  setRoutes(routes) {
    routes.forEach((route) => {
      route(this.getServer());
    });
  }
  setErrorLogHandlers() {
    this.getServer().use(function (error, req, res, next) {
      console.error(error);
      res.status(error.statusCode || 500).json(error);
    });
  }
  init() {
    this.setServer();
    const middlewares = [express.json()];
    this.setMiddlewares(middlewares);
    this.setRoutes(routes);
    this.setErrorLogHandlers();
  }
}

module.exports = { ExpressConfig };
