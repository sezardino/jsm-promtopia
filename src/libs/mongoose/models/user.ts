import { Model, Schema, model, models } from "mongoose";

export interface UserEntity {
  email: string;
  name: string;
  image: string;
}

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

const USER_MODEL_NAME = "User";

export const UserModel: Model<UserEntity> =
  models[USER_MODEL_NAME] || model(USER_MODEL_NAME, UserSchema);
