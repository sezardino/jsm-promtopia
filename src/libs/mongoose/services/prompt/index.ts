export * from "./input";

import { PromptModel } from "../../models/prompt";
import { CreatePromptInput } from "./input";

class PromptService {
  async create(input: CreatePromptInput) {
    const prompt = await PromptModel.create(input);
    return prompt.save();
  }
}

export const promptService = new PromptService();
