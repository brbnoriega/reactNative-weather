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
  const { name, lastname, mail, password } = req.body;

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
    let userCreated = await User.create({ name, lastname, password, mail });
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
const favAll = async (req, res) => {};

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

// const cityById = async (req, res) => {

//   const {id} = req.params;

//   try{
//   if(id){
//     const idUser = await User.find({_id: id})
//     console.log(idUser)
//  const map = idUser.map(c=> c.city)
//  res.send(map)
//   }

//   }catch(error){
//   console.log(error)
//   }

// //   const id= req.query.id;

// //   const allCitiesId = await getCitiesID(id);

// // let match = allCitiesId.map(m=> m.city)
// // res.send(match)
// // console.log(match)

// };

/* *********** Funciones ************ */
const getAllUsers = async () => {
  return await User.find({});
};

// const cityAll = async () => {
//   return await User.find({});
// };

// const getCitiesID = async (id) => {
//   return await User.find({id});
// };

module.exports = { getUsers, getUsersId, getUsersPost, userEdit, citiesAll };
