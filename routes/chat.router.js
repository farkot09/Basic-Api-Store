const express = require('express');
const router = express.Router();
const controller = require('../controllers/chat.controller');
const response = require('../errorHandler/response');

router.post('/', (req, res) => {
  controller
    .addChat(req.body.users)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, 'Internal Error', 500, e);
    });
});

router.get("/:userId", (req, res)=> {
    controller.listChats(req.params.userId).then((users => {
        response.success(req, res, users, 200)
    })).catch((e) => {
        response.error(req, res, "Internal Error", 500, e)
    })
} )

module.exports = router;