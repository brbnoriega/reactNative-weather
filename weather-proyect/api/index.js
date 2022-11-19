//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./app");
const { conn } = require("./src/db/db");

// Syncing all the models at once.


  server.listen(process.env.PORT, () => {
    console.log(`%s listening at ${process.env.PORT}`); // eslint-disable-line no-console
  });


console.log('hola')
// const express = require("express");
// const bodyParser = require("body-parser");
// const morgan = require("morgan");
// const connect = require("./src/db/db");
// const server = express();
// require("dotenv").config();
// const { PORT } = process.env;
// // server.get("/", (req, res) => {
// //   res.send("Hello world!");
// // });

// server.get((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// const startServer = async () => {
//   try {
//     await connect();
//     console.log("Connected to db 🌷🌞");
//   } catch (error) {
//     console.log(`Something went wrong ☔️⚡️`);
//     console.log(error);
//   }
// };
// startServer();

// server.listen(PORT, () => {
//   console.log(`Server listening: PORT ${PORT}`);
// });

// module.exports = server;
