import ComputerModel from "../model/computer.model.js";

async function getAllComputer(req, res) {
  try {
    const computers = await ComputerModel.find({});
    return res.status(200).json(computers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message:
        "Une erreur est survenue lors de la récupération des ordinateurs",
    });
  }
}

async function getOneComputer(req, res) {
  try {
    const computer = await ComputerModel.findById(req.params.computerId);

    if (!computer) {
      return res.status(404).json({ message: "Cet ordinateur n'existe pas" });
    }

    return res.status(200).json(computer);
  } catch (error) {
    return res.status(500).json({
      message:
        "Une erreur est survenue lors de la récupération de l'ordinateur",
    });
  }
}

async function createComputer(req, res) {
  try {
    if (!req.query.name) {
      return res
        .status(400)
        .json({ message: "Merci d'ajouter un nom pour l'ordinateur" });
    }

    const addComputer = await ComputerModel.create({
      name: req.query.name,
    });

    return res.status(200).json({ message: "Ordinateur bien ajouté" });
  } catch (error) {
    return res.status(500).json({
      message:
        "Une erreur est survenue lors de la récupération de l'ordinateur",
    });
  }
}

async function editComputer(req, res) {
  try {
    const editComputer = await ComputerModel.findByIdAndUpdate(
      req.params.computerId,
      { name: req.query.name }
    );

    if (!editComputer) {
      res.status(400).json({ message: "Cet ordinateur n'existe pas" });
    }

    if (!req.query.name) {
      return res
        .status(400)
        .json({ message: "Merci d'ajouter un nom pour l'ordinateur" });
    }

    return res.status(200).json({
      message: "L'ordinateur a bien été mis à jour..",
    });
  } catch (error) {
    return res.status(500).json({
      message:
        "Une erreur est survenue lors de la modification de l'ordinateur",
    });
  }
}

async function deleteComputer(req, res) {
  try {
    const deleteComputer = await ComputerModel.findByIdAndDelete(
      req.params.computerId
    );

    if (!deleteComputer) {
      res.status(400).json({ message: "Cet ordinateur n'existe pas" });
    }

    return res
      .status(200)
      .json({ message: "L'ordinateur à bien été supprimé" });
  } catch (error) {
    return res.status(500).json({
      message: "Une erreur est survenue lors de la suppression de l'ordinateur",
    });
  }
}

export {
  getAllComputer,
  getOneComputer,
  createComputer,
  editComputer,
  deleteComputer,
};
