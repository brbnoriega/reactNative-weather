const User = require("../db/schemas/user.schema");
const Info = require("../db/schemas/infoApi.schema");

//f que trae los users por id 1--user 1--id
const getUsersId = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const idUser = await User.find({ _id: id });
      console.log(idUser);
      res.status(200).send(idUser);
    }
  } catch (error) {
    console.log(error);
  }
};

// f que trae todos los users
const getUsers = async (req, res) => {
  const name = req.query.name;
  const usersTotal = await getAllUsers();

  if (name) {
    let userName = await usersTotal.filter((u) =>
      u.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log("entre");
    userName.length ? res.status(200).send(userName) : res.status(404).send("User not found");
    console.log("estoy al final del 404");
  } else {
    res.status(200).send(usersTotal);
  }
};

const getUsersPost = async (req, res) => {
  //FUNCIONA!!!! login- password
  const { name, lastname, nickname, isAdmin, mail, password, city, favourites, image } = req.body;

  const findUser = await User.findOne({ mail: mail });
  if (findUser && findUser.password !== password)
    return res.send({ log: false, mensage: "Password Incorrect!" });

  if (findUser) {
    let mailId = await User.findOne({ _id: findUser.id });
    res.send({
      log: true,
      mensage: "Suceffuly Login!",
      userInfo: [mailId, findUser],
    });
  } else {
    let userCreated = await User.create({
      name,
      lastname,
      nickname,
      isAdmin,
      password,
      mail,
      city,
      favourites,
      image,
    });
    let matcheo = await User.findOne({ name: name });
    res.send({
      log: true,
      mensage: "Login Suceffuly",
      userInfo: [userCreated, matcheo],
    });
  }
};

const userEdit = async (req, res) => {
  const { id } = req.params;
  const { name, lastname, mail, password, nickname } = req.body;
  try {
    await User.where({ _id: id }).update({
      name,
      lastname,
      mail,
      password,
      nickname,
    });
    res.send("Excelent Edit!");
  } catch (error) {
    console.log(error);
  }
};

/* *********** Favoritos ************ */
const favAll = async (req, res) => {
  const id = req.params.id;
  const cityById = await User.findOne({ _id: id });

  cityById
    ? res.status(200).send({ success: cityById.favourites })
    : res.status(400).send({ error: "City not found" });
};

const favDelete = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log("estoy antes del tryyyy");

  try {
    User.updateOne({ _id: id }, { $pull: { favourites: { name } } }, function (error, success) {
      if (error) {
        res.status(404).send("ERROR", error);
      }
      if (success) {
        res.status(200).send("TODO OK");
      }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const favAdd = async (req, res) => {
  const id = req.params.id;
  const name = req.body;
  try {
    User.updateOne({ _id: id }, { $push: { favourites: name } }, function (error, success) {
      if (error) {
        res.status(404).send("ERROR", error);
      }
      if (success) {
        res.status(200).send("TODO OK");
      }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* *********** Citys ************ */

const citiesAll = async (req, res) => {
  const id = req.params.id;
  const cityById = await User.findOne({ _id: id });

  cityById
    ? res.status(200).send({ success: cityById.city })
    : res.status(400).send({ error: "City not found" });
};

const cityEdit = async (req, res) => {
  const id = req.params.id;
  const name = req.body;
  try {
    User.updateOne({ _id: id }, { $push: { city: name } }, function (error, success) {
      if (error) {
        res.status(404).send("ERROR", error);
      }
      if (success) {
        res.status(200).send("TODO OK");
      }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  try {
    const { id, idCity } = req.params;
    const body = req.body;
    let cityToChange = await User.findOne({ _id: id });
    console.log("estoy arriba del if", body);
    if (cityToChange) {
      // let nameCityModel = cityToChange.city.name.value;
      // console.log("soy el name cityyyy", nameCityModel);
      // console.log("entre al if", body);
      let updateCity = await User.updateOne(body, { idCity }, { name: body });
      console.log("holaaaa CITY", updateCity);
      res.send(updateCity);
      // return updateCity;
      return User.findOne({ _id: id });
    } else {
      return { error: "City does not exist." };
    }
  } catch (error) {
    res.status(404).send("ERROR", error);
  }
};

/* *********** Funciones ************ */
const getAllUsers = async () => {
  return await User.find({});
};

module.exports = {
  getUsers,
  getUsersId,
  getUsersPost,
  userEdit,
  citiesAll,
  cityEdit,
  favAll,
  favDelete,
  favAdd,
};
