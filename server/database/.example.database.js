import mongoose from "mongoose";

export async function connectDB() {
  await mongoose
    .connect("name-of-database")
    .then(() => console.log("Database Mongo DB connecté"))
    .catch((err) => console.log(err));
}
