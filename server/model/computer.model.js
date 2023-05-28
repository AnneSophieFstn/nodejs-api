import mongoose from "mongoose"

const Schema = mongoose.Schema;

const computerSchema = new Schema({
    name: {
        type: String,
        required: "Enter a computer name"
    }
})

const Computer = mongoose.model('Computer', computerSchema);

export default Computer