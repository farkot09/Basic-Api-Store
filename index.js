const express = require('express');
const app = express();
const server = require("http").Server(app)
const cors = require('cors');
const db = require('./db/db');
const routerApi = require('./routes');
const socket = require("./socket")

db('mongodb+srv://farkot09:BarceloNA26@cluster0.y5q5d79.mongodb.net/?retryWrites=true&w=majority');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.use(cors());
socket.connect(server)

app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
});

routerApi(app);

server.listen(port, () => {
  console.log("la Aplicacion esta escuchando");
});
