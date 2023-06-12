import { CreatePromptInput } from "@/types";
import { PromptModel } from "./prompt.model";

class PromptService {
  async create(input: CreatePromptInput) {
    const prompt = await PromptModel.create(input);
    return prompt.save();
  }
}

export const promptService = new PromptService();
