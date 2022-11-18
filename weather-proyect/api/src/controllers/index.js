const { Router } = require("express");
const router = Router();

// f que trae todos los users
const getUsers = async (req, res) => {
  const name = req.query.name;
  const usersTotal = await getAllUsers();

  if (name) {
    let userName = await usersTotal.filter((u) =>
      u.name.toLowerCase().includes(name.toLowerCase())
    );
    userName.length
      ? res.status(200).send(userName)
      : res.status(404).send("User not found");
  } else {
    res.status(200).send(usersTotal);
  }
};

//f que trae los users por id 1--user 1--id
const getUsersId = async (req, res) => {
  try {
    const { id } = req.params;
    const oneUser = await getOneId(id);
    res.status(200).json(oneUser);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const getUsersPost = async (req, res) => {
  const { name, lastname, mail, password } = req.body;

  const findUser = await user.findOne({ mail: mail });
  if (findUser && findUser.password !== password)
    return res.send({ log: false, mensage: "Password Incorrect!" });

  if (findUser) {
    let mailId = await user.findOne({ id: findUser.id });
    res.send({
      log: true,
      mensage: "Suceffuly Login!",
      userInfo: [mailId, findUser],
    });
  } else {
    let userCreated = await user.create({ name, lastname, password, mail });
    let matcheo = await user.findOne({ name: name });
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
      await user.where({_id: id}).update({
        name,
        lastname,
        mail,
        password,
        nickname
      })
      res.send("Excelent Edit!");
    } catch (error) {
      console.log(error);
    }
};

const getAllUsers = async () => {
  return await user.findOne({});
};

const getOneId = async (id) => {
  return await user.findById(id);
};

module.exports = { getUsers, getUsersId, getUsersPost, userEdit };
