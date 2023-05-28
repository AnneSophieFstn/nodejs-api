import mongoose from "mongoose";
import bcrypt from "bcrypt";
const saltRounds = 10;

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: "Enter a name",
  },
  email: {
    type: String,
    required: "Enter a email",
  },
  password: {
    type: String,
    required: "Enter a password",
  },
});

userSchema.pre('save', function(next){
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
})

const User = mongoose.model("User", userSchema);

export default User;
