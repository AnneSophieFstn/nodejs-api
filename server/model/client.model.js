import mongoose from "mongoose";

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    firstname: {
        type: String,
        required: "Enter a firstname"
    },
    lastname: {
        type: String,
        required: "Enter a lastname"
    }
})

const Client = mongoose.model("Client", clientSchema);

export default Client;