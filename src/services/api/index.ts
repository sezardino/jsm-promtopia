import { PromptModule } from "./modules";
import { UserModule } from "./modules/user";

class ApiService {
  prompt: PromptModule;
  user: UserModule;

  constructor() {
    this.prompt = new PromptModule();
    this.user = new UserModule();
  }
}

export const apiService = new ApiService();
