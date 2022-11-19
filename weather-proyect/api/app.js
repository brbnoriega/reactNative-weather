const express = require("express");
const router = express.Router()
const bodyParser = require("body-parser");
const morgan = require("morgan");
const connect = require("./src/db/db");
const server = express();
require("dotenv").config();
const { PORT } = process.env;
const routes = require('./src/routes/index')

server.get((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const startServer = async () => {
  try {
    await connect();
    console.log("Connected to db 🌷🌞");
    console.log('un gusto')
  } catch (error) {
    console.log(`Something went wrong ☔️⚡️`);
    console.log(error);
  }
};
startServer();

server.use("/", routes);


module.exports = server;
