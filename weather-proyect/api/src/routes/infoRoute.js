const express = require("express");
const router = express.Router();
const { infoApi, infoDB } = require("../controllers/indexInfoApi.js");

router.get("/cities/", infoDB);
router.get("/cities/:id");
router.put("/editCities/:id");

module.exports = router;
