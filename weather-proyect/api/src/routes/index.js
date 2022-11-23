const express = require("express");
const router = express.Router();
const useRoute = require("./userRoute");
// const infoRoute = require("./infoRoute");

router.use(useRoute);
// router.use(infoRoute);
console.log("mama miaa");

module.exports = router;
