import express from "express";

import {
  getAllComputer,
  getOneComputer,
  createComputer,
  editComputer,
  deleteComputer,
} from "../controller/computer.controller.js";

import { verifyToken } from "../middleware/auth.js";

const computerRouter = express.Router();

computerRouter.get("/computers", verifyToken, getAllComputer);
computerRouter.get("/computers/:computerId", verifyToken, getOneComputer);
computerRouter.post("/computers", verifyToken, createComputer);
computerRouter.put("/computers/:computerId", verifyToken, editComputer);
computerRouter.delete("/computers/:computerId", verifyToken, deleteComputer);

export default computerRouter;
