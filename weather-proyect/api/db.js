const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/weather-mongo");
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
