import mongoose from "mongoose";
import Computer from "./computer.model.js";
import Client from "./client.model.js";

const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    horaire:{
        type: Date,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    computer_id: {
        type: Schema.Types.ObjectId,
        ref: "Computer",
        required: true
    },
    client_id: {
        type: Schema.Types.ObjectId,
        ref: "Client",
        required: true
    }
})

const Assignment = mongoose.model("Assignment", assignmentSchema);

export default Assignment;