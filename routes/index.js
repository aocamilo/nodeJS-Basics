const express = require("express");
const productsRouter = require("./products.router");
const userRouter = require("./users.router");
const categoriesRouter = require("./categories.router");
const homeRouter = require("./home.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/", homeRouter);
  router.use("/products", productsRouter);
  router.use("/users", userRouter);
  router.use("/categories", categoriesRouter);
}

module.exports = routerApi;
