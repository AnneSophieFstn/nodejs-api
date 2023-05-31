import ClientModel from "../model/client.model.js";

async function getAllCLient(req, res) {
  try {
    const clients = await ClientModel.find({});
    return res.status(200).json(clients);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Une erreur est survenue lors de la récupération des clients",
    });
  }
}

async function getOneCLient(req, res) {
  try {
    const client = await ClientModel.findById(req.params.clientId);

    if (!client) {
      return res.status(404).json({ message: "Cet ordinateur n'existe pas" });
    }

    return res.status(200).json(client);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Une erreur est survenue lors de la récupération des clients",
    });
  }
}

async function createCLient(req, res) {
  try {
    if (!req.query.lastname || !req.query.firstname) {
      return res
        .status(400)
        .json({ message: "Merci de renseigner l'ensemble des informations" });
    }

    const addClient = ClientModel.create({
      firstname: req.query.firstname,
      lastname: req.query.lastname,
    });

    return res.status(200).json({ message: "Client ajouté avec succès" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Une erreur est survenue lors de la récupération des clients",
    });
  }
}

async function editCLient(req, res) {
  try {
    if (!req.query.firstname || !req.query.lastname) {
      return res
        .status(400)
        .json({ message: "Merci de renseigner l'ensemble des informations" });
    }
    const editCLient = await ClientModel.findByIdAndUpdate(
      req.params.clientId,
      {
        firstname: req.query.firstname,
        lastname: req.query.lastname,
      }
    );

    if (!editCLient) {
      res.status(400).json({
        message: "Ce client n'existe pas..",
      });
    }

    return res.status(200).json({
      message: "Le client a bien été mis à jour..",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Une erreur est survenue lors de la récupération des clients",
    });
  }
}

async function deleteCLient(req, res) {
  try {
    const deleteClient = await ClientModel.findByIdAndDelete(
      req.params.clientId
    );

    if (!deleteClient) {
      res.status(400).json({
        message: "Ce client n'existe pas..",
      });
    }

    return res.status(200).json({ message: "Le client a bien été supprimé.." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Une erreur est survenue lors de la récupération des clients",
    });
  }
}

export { getAllCLient, getOneCLient, createCLient, editCLient, deleteCLient };
