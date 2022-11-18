import { Router } from "express";
import { userSchema } from "../db/schemas/user.schema";
import { getUsers, getUsersId, getUsersPost, userEdit } from "../controllers";
const router = Router();

router.get("/user", getUsers);
router.get("/user/id", getUsersId);
router.put("/user/editUser/id", userEdit);
router.post("/user", getUsersPost);

router.get("/user/fav/id");
router.put("/user/fav");
router.put("/user/removeFav/id");

router.get("/user/cities/id");
router.put("/user/editCities/id");
