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
      ...(search && {
        $or: [{ body: searchQuery }, { tag: searchQuery }],
      }),
      ...(tag && { tag }),
    };

    const totalCount = await PromptModel.countDocuments(findQuery);
    const { limit, meta, skip } = getPagination(
      input.page,
      input.limit,
      totalCount
    );

    const prompts = await PromptModel.find(findQuery)
      .populate("creator")
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);

    return getEntitiesResponse(prompts, meta);
  }
}

export const promptService = new PromptService();
