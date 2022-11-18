const mongoose = require("mongoose");
require("dotenv").config();
const { USER, PASSWORD, DB_NAME } = process.env;

const uri = `mongodb+srv://${USER}:${PASSWORD}@cluster0.x681bug.mongodb.net/?retryWrites=true&w=majority`;

//mongoose.connect(mongodb+srv://clusterAnything.mongodb.net/test?retryWrites=true&w=majority, { user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD, useNewUrlParser: true, useUnifiedTopology: true })

const connect = async () => {

    mongoose.connect(uri, 

      
      {useNewUrlParser: true, useUnifiedTopology: true});

    // console.log("DB connected to", db.connection.name);

};

module.exports = connect;
