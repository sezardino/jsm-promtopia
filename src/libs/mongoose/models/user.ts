import { Schema, model, models } from "mongoose";

export const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
});

const USER_MODEL_NAME = "User";

export const UserModel =
  models[USER_MODEL_NAME] || model(USER_MODEL_NAME, UserSchema);