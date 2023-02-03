const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const routerApi = require('./routes');

db('mongodb+srv://farkot09:BarceloNA26@cluster0.y5q5d79.mongodb.net/?retryWrites=true&w=majority');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
});

routerApi(app);

app.listen(port);
