const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUsersId,
  getUsersPost,
  userEdit,
  citiesAll,
  cityEdit,
  favAll,
  favDelete,
  favAdd,
} = require("../controllers/index");

router.get("/user/:id", getUsersId); //funciona trae solo el id especificado por params
router.get("/user", getUsers); //funciona, trae todos los usuarios
router.put("/user/editUser/:id", userEdit); //funciona la edicion
router.post("/user", getUsersPost); //funciona perfecto

//Se podria unificar fav y cities
router.get("/cities/:id", citiesAll); //funciona, trae todas las citys de todos los users
router.put("/editCity/:id", cityEdit);

router.get("/fav/:id", favAll); //funciona, trae todos los favoritos!
router.put("/fav/delete/:id", favDelete);
router.post("/fav/add/:id", favAdd);

router.put("/user/removeFav/:id");

module.exports = router;
