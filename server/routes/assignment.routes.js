import express from "express";

import {
  getAllAssignment,
  getOneAssignment,
  createAssignment,
  editAssignment,
  deleteAssignment,
} from "../controller/assignment.controller.js";

import { verifyToken } from "../middleware/auth.js";

const assignmentRouter = express.Router();

assignmentRouter.get("/assignments", verifyToken, getAllAssignment);
assignmentRouter.get(
  "/assignments/:assignmentId",
  verifyToken,
  getOneAssignment
);
assignmentRouter.post("/assignments", verifyToken, createAssignment);
assignmentRouter.put("/assignments/:assignmentId", verifyToken, editAssignment);
assignmentRouter.delete(
  "/assignments/:assignmentId",
  verifyToken,
  deleteAssignment
);

export default assignmentRouter;
