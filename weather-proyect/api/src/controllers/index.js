const User = require("../db/schemas/user.schema");
const Info = require("../db/schemas/infoApi.schema");



//f que trae los users por id 1--user 1--id
const getUsersId = async (req, res) => {
  const {id} = req.params;

  try{
  if(id){
    const idUser = await User.find({_id: id})
    console.log(idUser)
    res.status(200).send(idUser)
  }
 
  }catch(error){
  console.log(error)
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
  const { name, lastname, mail, password } = req.body;

  const findUser = await User.findOne({ mail: mail });
  if (findUser && findUser.password !== password)
    return res.send({ log: false, mensage: "Password Incorrect!" });

  if (findUser) {
    let mailId = await User.findOne({ id: findUser.id });
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
 
//user---->id = usuario 
const {id} = req.params;

try{
if(id){
  const idUser = await User.find({_id: id})
  console.log(idUser)
  res.status(200).send(idUser)
}

}catch(error){
console.log(error)
}

//usuario--->buscar city y traer su array





  // const { city } = req.query;
  // const citiesAll = await getAllCities(req.query.id);

  // try {
  //   if (city) {
  //     // let cityResponse = await User.findOne({ city: name });
  //     const cityName = citiesAll.map((c) => {
  //      c.city.name.toLowerCase().includes(city.name.toLowerCase());
  //     });
  //     cityName.length
  //       ? res.status(200).send("Todo OK, Beautiful", cityName)
  //       : res.status(404).send("City not found");
  //   }
  //   res.send(cityName)
  // } catch (error) {
  //   console.log(error);
  // }
};

/* *********** Funciones ************ */
const getAllUsers = async () => {
  return await User.find({});
};

const getOneId = async (id) => {
  return await User.findOne({id:id});
};

const getAllCities = async (id) => {
 
let citysMongo = await User.FindAll({city: city});
 
if(!citysMongo) res.status(404).send("not found");
  
res.send(citysMongo)
};

// const getCitiesID = async (id) => {
//   return await Info.findById(id);
// };

module.exports = { getUsers, getUsersId, getUsersPost, userEdit, citiesAll };
