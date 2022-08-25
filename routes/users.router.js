const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    title: 'TOdas los usuarios van aqui',
    body: 'Deberiua estar la descripcion de todas las usuarios',
  });
});

module.exports = router;
