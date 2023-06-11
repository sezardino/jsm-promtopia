import { PromptModule } from "./modules";

class ApiService {
  prompt: PromptModule;

  constructor() {
    this.prompt = new PromptModule();
  }
}

export const apiService = new ApiService();
