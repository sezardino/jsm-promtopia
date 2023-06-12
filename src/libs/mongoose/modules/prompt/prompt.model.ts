import { PromptEntity } from "@/types";
import { Model, Schema, model, models } from "mongoose";
import { USER_MODEL_NAME } from "../user/user.model";

export const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: USER_MODEL_NAME,
    required: [true, "Creator is required"],
  },
  body: {
    type: String,
    required: [true, "Body is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
});

const PROMPT_MODEL_NAME = "Prompt";

export const PromptModel: Model<PromptEntity> =
  models[PROMPT_MODEL_NAME] || model(PROMPT_MODEL_NAME, PromptSchema);
