const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const connect = require("./src/db/db");
const server = express();
require("dotenv").config();
const { PORT } = process.env;
// server.get("/", (req, res) => {
//   res.send("Hello world!");
// });

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
  } catch (error) {
    console.log(`Something went wrong ☔️⚡️`);
    console.log(error);
  }
};
startServer();

server.listen(PORT, () => {
  console.log(`Server listening: PORT ${PORT}`);
});

module.exports = server;
