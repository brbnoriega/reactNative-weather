

const express = require("express");
const router = express.Router()
const useRoute = require('./userRoute')



router.use(useRoute)
console.log('mama miaa')

module.exports = router;
