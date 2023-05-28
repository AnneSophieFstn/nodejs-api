import express from "express";

import {
  getAllCLient,
  getOneCLient,
  createCLient,
  editCLient,
  deleteCLient,
} from "../controller/client.controller.js";
import { verifyToken } from "../middleware/auth.js";

const clientRouter = express.Router();

clientRouter.get("/clients", verifyToken, getAllCLient);
clientRouter.get("/clients/:clientId", verifyToken, getOneCLient);
clientRouter.post("/clients", verifyToken, createCLient);
clientRouter.put("/clients/:clientId", verifyToken, editCLient);
clientRouter.delete("/clients/:clientId", verifyToken, deleteCLient);

export default clientRouter;
