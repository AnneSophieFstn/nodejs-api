const { createComputer } = require("../controller/computer.controller.js");
const ComputerModel = require("../model/computer.model.js");

// Mock du modèle de l'ordinateur
jest.mock("../model/computer.model.js", () => ({
  create: jest.fn(),
}));

describe("createComputer", () => {
  let req, res;

  beforeEach(() => {
    req = {
      query: {
        name: "Test PC1",
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("devrait retourner un code de statut 200 et un message si l'ordinateur est ajouté avec succès", async () => {
    // Configuration du mock pour simuler un ajout réussi
    const computerData = { name: "Test PC1" };
    ComputerModel.create.mockResolvedValue(computerData);

    await createComputer(req, res);

    expect(ComputerModel.create).toHaveBeenCalledWith(computerData);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "Ordinateur bien ajouté",
    });
  });

  it("devrait retourner un code de statut 400 et un message si aucun nom n'est fourni pour l'ordinateur", async () => {
    req.query.name = "";

    await createComputer(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Merci d'ajouter un nom pour l'ordinateur",
    });
  });

  it("devrait retourner un code de statut 500 et un message en cas d'erreur lors de la création de l'ordinateur", async () => {
    // Configuration du mock pour simuler une erreur
    const errorMessage = "Une erreur est survenue";
    ComputerModel.create.mockRejectedValue(new Error(errorMessage));

    await createComputer(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message:
        "Une erreur est survenue lors de la récupération de l'ordinateur",
    });
  });
});
