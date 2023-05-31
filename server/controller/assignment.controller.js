import moment from "moment";
import AssignmentModel from "../model/assignment.model.js";
import ComputerModel from "../model/computer.model.js";
import ClientModel from "../model/user.model.js";

async function getAllAssignment(req, res) {
  try {
    const assignments = await AssignmentModel.find().lean();
    res.status(200).json(assignments);
  } catch (error) {
    return res.status(500).json({
      message:
        "Une erreur est survenue lors de la récupération de l'attribution",
    });
  }
}

async function getOneAssignment(req, res) {
  const assignment = await AssignmentModel.findById(req.params.assignmentId);
  if (!assignment) {
    return res.status(404).json({ message: "Cet réservation n'existe pas" });
  }
  return res.status(200).json(assignment);
}

async function createAssignment(req, res) {
  try {
    if (
      !req.query.horaire ||
      !req.query.date ||
      !req.query.computer_id ||
      !req.query.client_id
    ) {
      return res
        .status(400)
        .json({ message: "Merci de renseigner l'ensemble des informations" });
    }

    const computer = await ComputerModel.findById(req.query.computer_id);
    const client = await ClientModel.findById(req.query.client_id);

    if (!computer || !client) {
      return res
        .status(404)
        .json({ message: "Ordinateur et/ou Client introuvables.." });
    }

    // Valider la chaîne de date en utilisant moment.js
    const hour = req.query.horaire;
    const date = moment(`${req.query.date} ${hour}`, "YYYY-MM-DD HH:mm");
    if (!date.isValid()) {
      return res.status(400).json({ message: "Format de date invalide" });
    }

    const createAssignment = AssignmentModel.create({
      horaire: date.toDate(),
      date: req.query.date,
      computer_id: req.query.computer_id,
      client_id: req.query.client_id,
    });

    return res.status(200).json({ message: "Attribution ajouté avec succés" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur lors de la création de l'attribution.." });
  }
}

async function editAssignment(req, res) {
  const editAssignment = AssignmentModel.findByIdAndUpdate({
    horaire: req.query.horaire,
    date: req.query.date,
    computer_id: req.query.computer_id,
    client_id: req.query.client_id,
  });

  if (!editAssignment) {
    res.status(400).json({ message: "Cet attribution n'existe pas" });
  }

  return res.status(200).json({
    message: "L'attribution a bien été mis à jour..",
  });
}

async function deleteAssignment(req, res) {
  try {
    const deleteAssignment = await AssignmentModel.findByIdAndDelete(
      req.params.assignmentId
    );

    if (!deleteAssignment) {
      return res
        .status(400)
        .json({ message: "Cet attribution n'existe pas.." });
    }

    return res
      .status(200)
      .json({ message: "L'atribution a bien été supprimé.." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message:
        "Une erreur est survenue lors de la récupération de l'attribution",
    });
  }
}

export {
  getAllAssignment,
  getOneAssignment,
  createAssignment,
  editAssignment,
  deleteAssignment,
};
