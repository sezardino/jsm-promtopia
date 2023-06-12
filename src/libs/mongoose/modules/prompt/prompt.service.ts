import { CreatePromptInput, PromptEntity, PromptInput } from "@/types";
import { FilterQuery } from "mongoose";
import { getEntitiesResponse, getPagination } from "../../helpers";
import { PromptModel } from "./prompt.model";

class PromptService {
  async create(input: CreatePromptInput) {
    const prompt = await PromptModel.create(input);
    return prompt.save();
  }

  async getMany(input: PromptInput) {
    const { creator, search, tag } = input;

    const searchQuery = { $regex: search, $options: "i" };

    const findQuery: FilterQuery<PromptEntity> = {
      ...(creator && { creator }),
      ...(search && { body: searchQuery, tag: searchQuery }),
      ...(tag && { tag: { $regex: tag, $options: "i" } }),
    };

    const totalCount = await PromptModel.countDocuments(findQuery);
    const { limit, meta, skip } = getPagination(
      input.page,
      input.limit,
      totalCount
    );

    const prompts = await PromptModel.find(findQuery)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);

    return new Response(JSON.stringify(getEntitiesResponse(prompts, meta)), {
      status: 200,
    });
  }
}

export const promptService = new PromptService();
