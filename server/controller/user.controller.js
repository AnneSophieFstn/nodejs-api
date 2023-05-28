import UserModel from "../model/user.model.js";
import bcrypt from "bcrypt";

async function getAllUser(req, res) {
  const users = await UserModel.find({});
  return res.status(200).json(users);
}

async function getOneUser(req, res) {
  const user = await UserModel.findById(req.params.userId);

  if (!user) {
    return res.status(404);
  }

  return res.status(200).json(user);
}

async function createUser(req, res) {
  const addUser = UserModel.create({
    name: req.query.name,
    email: req.query.email,
    password: req.query.password,
  });

  return res.status(200).json({ message: "Utilisateur ajouté avec succès" });
}

async function editUser(req, res) {
  const saltRounds = 10;
  const editUser = await UserModel.findByIdAndUpdate(req.params.userId, {
    name: req.query.name,
    email: req.query.email,
    password: bcrypt.hashSync(req.query.password, saltRounds),
  });

  if (!editUser) {
    res.status(400).json({ message: "Cet utilisateur n'existe pas" });
  }

  return res.status(200).json({
    message: "L'utilisateur a bien été mis à jour..",
  });
}

async function deleteUser(req, res) {
  const deleteUser = await UserModel.findByIdAndDelete(req.params.userId);

  if (!deleteUser) {
    res.status(400).json({ message: "Cet utilisateur n'existe pas" });
  }

  return res.status(200).json({ message: "L'utilisateur à bien été supprimé" });
}

export { getAllUser, getOneUser, createUser, editUser, deleteUser };
