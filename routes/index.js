const mensageRouter = require("./message.router")
const userRouter = require("./user.router")
const chatRouter = require("./chat.router")
const express = require('express');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/message', mensageRouter);
  router.use('/user', userRouter);
  router.use('/chat', chatRouter);
};

module.exports = routerApi;
