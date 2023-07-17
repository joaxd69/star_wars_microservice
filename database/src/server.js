const express = require("express");
const morgan = require("morgan");
const server = express();

server.use(morgan("dev"));

server.use('/',require('./routes'))

server.use("*", (req, res) => {
  res.status(404).send("page not found");
});

module.exports = server;
