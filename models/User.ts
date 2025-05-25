import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  role: { type: String, default: "user", enum: ["user", "admin"] },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
