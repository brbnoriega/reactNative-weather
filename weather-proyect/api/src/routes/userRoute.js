const express = require("express");
const router = express.Router();
const { getUsers, getUsersId, getUsersPost, userEdit } = require("../controllers/index");

router.get("/user", getUsers);
router.get("/user/id", getUsersId);
router.put("/user/editUser/id", userEdit);
router.post("/user", getUsersPost);

router.get("/user/fav/id");
router.put("/user/fav");
router.put("/user/removeFav/id");

router.get("/user/cities/id");
router.put("/user/editCities/id");

module.exports = router;
