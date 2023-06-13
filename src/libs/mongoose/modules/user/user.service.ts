import { CreateUserInput, UserEntity, UserInput } from "@/types";
import { FilterQuery } from "mongoose";
import { UserModel } from "./user.model";

class UserService {
  async create(input: CreateUserInput) {
    const user = await UserModel.create(input);
    return user.save();
  }

  async get(input: UserInput) {
    const { email, id } = input;

    if (!email && !id) return null;

    const findQuery: FilterQuery<UserEntity> = {
      ...(email && { email }),
      ...(id && { _id: id }),
    };

    return UserModel.findOne(findQuery);
  }

  async isExist(input: UserInput) {
    return UserModel.exists(input);
  }
}

export const userService = new UserService();
