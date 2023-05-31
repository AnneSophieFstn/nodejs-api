import UserModel from "../model/user.model.js";
import bcrypt from "bcrypt";

async function getAllUser(req, res) {
  try {
    const users = await UserModel.find({});
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({
      message:
        "Une erreur est survenue lors de la récupération de l'utilisateur",
    });
  }
}

async function getOneUser(req, res) {
  try {
    const user = await UserModel.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({ message: "Cet utilisateur n'existe pas" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message:
        "Une erreur est survenue lors de la récupération de l'utilisateur",
    });
  }
}

async function createUser(req, res) {
  try {
    if (!req.query.name && !req.query.email && !req.query.password) {
      return res
        .status(400)
        .json({ message: "Merci de renseigner l'ensemble des informations" });
    }

    const addUser = UserModel.create({
      name: req.query.name,
      email: req.query.email,
      password: req.query.password,
    });

    return res.status(200).json({ message: "Utilisateur ajouté avec succès" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message:
        "Une erreur est survenue lors de la récupération de l'utilisateur",
    });
  }
}

async function editUser(req, res) {
  try {
    const saltRounds = 10;
    if (!req.query.name || !req.query.email || !req.query.password) {
      return res
        .status(400)
        .json({ message: "Merci de renseigner l'ensemble des informations" });
    }
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
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message:
        "Une erreur est survenue lors de la récupération de l'utilisateur",
    });
  }
}

async function deleteUser(req, res) {
  try {
    const deleteUser = await UserModel.findByIdAndDelete(req.params.userId);

    if (!deleteUser) {
      res.status(400).json({ message: "Cet utilisateur n'existe pas" });
    }

    return res
      .status(200)
      .json({ message: "L'utilisateur à bien été supprimé" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message:
        "Une erreur est survenue lors de la récupération de l'utilisateur",
    });
  }
}

export { getAllUser, getOneUser, createUser, editUser, deleteUser };
