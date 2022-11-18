const mongoose = require("mongoose");
require("dotenv").config();

const user = "weather";
const password = "h9HL6N5KZdzu2y3D";
const db_name = "weather";
const uri = `mongodb+srv://${user}:${password}@cluster0.x681bug.mongodb.net/${db_name}?retryWrites=true&w=majority`;

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/weather-mongo");
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
