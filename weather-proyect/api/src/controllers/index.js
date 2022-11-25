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
    userName.length
      ? res.status(200).send(userName)
      : res.status(404).send("User not found");
    console.log("estoy al final del 404");
  } else {
    res.status(200).send(usersTotal);
  }
};

const getUsersPost = async (req, res) => {
  //FUNCIONA!!!! login- password
  const {
    name,
    lastname,
    nickname,
    isAdmin,
    mail,
    password,
    city,
    favourites,
    image,
  } = req.body;

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
  const reqCity = req.query.city;
  const cityById = await User.find({ _id: id });
  let arrayCity = cityById.map((m) => m.city);

  let allCities = arrayCity.map((u) => u.filter((c) => c === reqCity));
  if (reqCity && allCities[0].length > 0) {
    //id de caro ingreso y aparecen sus citys
    res.send(allCities);
    console.log("Match user-id!", allCities);
  } else if (!reqCity) {
    res.send(arrayCity);
    console.log("All citys de los users", arrayCity); // array de citys de los users
  } else {
    res.status(404).send("Not Found!");
  }
};

const favDelete = async (req, res) => {
  const { id } = req.params;
  const { _id, name } = req.body;
  console.log("estoy antes del tryyyy");
  try {
    const userFind = await User.findOne({ _id: id });
    // const cityFind = await User.findOne({ city: _id });
    console.log("soy el userFInd");
    const userDeleteFavs = await userFind.deleteOne({ city: name });
    console.log("deleteeeee", userDeleteFavs);

    res.json(userDeleteFavs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const favAdd = async (req, res) => {
  const id = req.params.id;
  const name = req.body;
  const userFind = await User.findOne({ id });

    if (userFind) {
      const keep = userFind.city;
      keep.push(name)
      console.log(keep)
    }
 try {
    const findFav = await User.updateOne({ name });
    console.log("soy findFav", findFav);
    return keep;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* *********** Citys ************ */

const citiesAll = async (req, res) => {
  const id = req.params.id;
  const reqCity = req.query.city;
  const cityById = await User.find({ _id: id });
  let arrayCity = cityById.map((m) => m.city);

  let allCities = arrayCity.map((u) => u.filter((c) => c === reqCity));
  if (reqCity && allCities[0].length > 0) {
    //id de caro ingreso y aparecen sus citys
    res.send(allCities);
    console.log("Match user-id!", allCities);
  } else if (!reqCity) {
    res.send(arrayCity);
    console.log("All citys de los users", arrayCity); // array de citys de los users
  } else {
    res.status(404).send("Not Found!");
  }
};

const cityEdit = async (req, res) => {
  // const position = req.body._id;
  // const newCity = req.body.city;

  // User.findById(position)
  //   .then((model) => {
  //     return Object.assign(model, { city: newCity });
  //   })
  //   .then((model) => {
  //     return model.save();
  //   })
  //   .then((updatedModel) => {
  //     res.json({
  //       msg: "model updated",
  //       updatedModel,
  //     });
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });

  // var query = { city: req.city };
  // req.newData.city = req.city;

  // User.findOneAndUpdate(query, req.newData, { upsert: true }, function (err, doc) {
  //   if (err) return res.send(500, { error: err });
  //   return res.send("Succesfully saved.");
  // });

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
