const express = require('express');
const router = express.Router();
const controller = require('../controllers/message.controller');
const response = require('../errorHandler/response');

router.get('/', (req, res) => {
  const filterMessages = req.query.user || null;
  controller
    .getMessage(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((e) => {
      response.error(req, res, 'unexpecy Error', 500, e);
    });
});

router.post('/', (req, res) => {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((e) => {
      response.error(req, res, 'Informacion invalida', 400, e);
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
  controller.deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Mensaje ${req.params.id} Eliminado`, 200)
    }).catch((e) => {
      response.error(req, res, "Error interno", 500, e)
    });
});

module.exports = router;