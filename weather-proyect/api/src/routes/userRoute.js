const express = require("express");
const router = express.Router();
const { getUsers, getUsersId, getUsersPost, userEdit, citiesAll } = require("../controllers/index");


router.get("/user/:id", getUsersId); //funciona trae solo el id especificado por params
router.get("/user", getUsers); //funciona, trae todos los usuarios
router.put("/user/editUser/:id", userEdit); //funciona la edicion
router.post("/user", getUsersPost); //funciona perfecto

//Se podria unificar fav y cities
router.get("/user/:id/cities", citiesAll);
router.get("/user/cities/id");
router.put("/user/editCities/id");

router.get("/user/fav");
router.get("/user/fav/id");
router.put("/user/fav/id");
router.put("/user/removeFav/id");


module.exports = router;
