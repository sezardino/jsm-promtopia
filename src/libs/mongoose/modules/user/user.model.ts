import { UserEntity } from "@/types";
import { Model, Schema, model, models } from "mongoose";

export const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
});

export const USER_MODEL_NAME = "User";

export const UserModel: Model<UserEntity> =
  models[USER_MODEL_NAME] || model(USER_MODEL_NAME, UserSchema);
