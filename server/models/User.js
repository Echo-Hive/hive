import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    default: null,
  },
  googleRefreshToken: {
    type: String,
    default: "",
  },
});

export default mongoose.model("User", userSchema);
