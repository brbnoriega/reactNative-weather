const mongoose = require("mongoose");
require("dotenv").config();
const { USER, PASSWORD, DB_NAME, MONGO_DB } = process.env;

//mongoose.connect(mongodb+srv://clusterAnything.mongodb.net/test?retryWrites=true&w=majority, { user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD, useNewUrlParser: true, useUnifiedTopology: true })

const connect = async () => {
  mongoose.connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true });

  // console.log("DB connected to", db.connection.name);
};

module.exports = connect;
