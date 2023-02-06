const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');
const response = require('../errorHandler/response');

router.post('/', (req, res) => {
  controller
    .addUser(req.body.name)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, 'Internal Error', 500, e);
    });
});

router.get('/', (req, res) => {
  controller
    .getUser()
    .then((userList) => {
      response.success(req, res, userList, 200);
    })
    .catch((e) => {
      response.error(req, res, 'unexpecy Error', 500, e);
    });
});

router.patch('/:id', (req, res) => {
  controller
    .updateMessage(req.params.id, req.body.text)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Error interno', 500, e);
    });
});

router.delete('/:id', (req, res) => {
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Mensaje ${req.params.id} Eliminado`, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Error interno', 500, e);
    });
});

module.exports = router;
