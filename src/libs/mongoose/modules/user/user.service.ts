import { CreateUserInput, UserInput } from "@/types";
import { UserModel } from "./user.model";

class UserService {
  async create(input: CreateUserInput) {
    const user = await UserModel.create(input);
    return user.save();
  }

  async get(input: UserInput) {
    return UserModel.findOne(input);
  }

  async isExist(input: UserInput) {
    return UserModel.exists(input);
  }
}

export const userService = new UserService();
