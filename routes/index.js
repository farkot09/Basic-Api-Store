const mensageRouter = require("./message.router")
const express = require('express');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/message', mensageRouter);
};

module.exports = routerApi;
