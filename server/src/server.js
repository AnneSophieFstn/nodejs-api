import express from "express";
import { connectDB } from "../database/database.js";
import computerRouter from "../routes/computer.routes.js";
import userRoutes from "../routes/user.routes.js";
import assignmentRouter from "../routes/assignment.routes.js";
import clientRouter from "../routes/client.routes.js";
import authRouter from "../routes/auth.routes.js";

const app = express();

const port = process.env.PORT || 8000;

connectDB();

app.use(authRouter);
app.use(computerRouter);
app.use(userRoutes);
app.use(assignmentRouter);
app.use(clientRouter);

app.listen(port, () => {
  console.log(`Listening on port: ${port}...`);
});
