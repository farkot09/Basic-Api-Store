const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    title: 'TOdas los categorias van aqui',
    body: 'Deberiua estar la categorias de todas las usuarios',
  });
});

module.exports = router;
