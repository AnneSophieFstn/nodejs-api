import express from "express";

import { auth } from "../middleware/auth.js";

const authRoutes = express.Router();

authRoutes.post("/auth", auth);

export default authRoutes;
