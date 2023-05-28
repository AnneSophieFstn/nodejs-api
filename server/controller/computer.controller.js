import ComputerModel from "../model/computer.model.js";

async function getAllComputer(req, res) {
  const computers = await ComputerModel.find({});
  return res.status(200).json(computers);
}

async function getOneComputer(req, res) {
  const computer = await ComputerModel.findById(req.params.computerId);

  if (!computer) {
    return res.status(404);
  }

  return res.status(200).json(computer);
}

async function createComputer(req, res) {
  if (!req.query.name) {
    return res
      .status(400)
      .json({ message: "Merci d'ajouter un nom pour l'ordinateur" });
  }

  const addComputer = await ComputerModel.create({
    name: req.query.name,
  });

  return res
    .status(200)
    .json({ message: "Ordinateur bien ajouté" });
}

async function editComputer(req, res) {
  const editComputer = await ComputerModel.findByIdAndUpdate(
    req.params.computerId,
    {name: req.query.name,
  });

  if (!editComputer) {
    res.status(400).json({ message: "Cet ordinateur n'existe pas" });
  }

  return res.status(200).json({
    message: "L'ordinateur a bien été mis à jour.."
  });
}

async function deleteComputer(req, res) {
  const deleteComputer = await ComputerModel.findByIdAndDelete(
    req.params.computerId
  );

  if (!deleteComputer) {
    res.status(400).json({ message: "Cet ordinateur n'existe pas" });
  }

  return res.status(200).json({ message: "L'ordinateur à bien été supprimé" });
}

export {
  getAllComputer,
  getOneComputer,
  createComputer,
  editComputer,
  deleteComputer,
};
