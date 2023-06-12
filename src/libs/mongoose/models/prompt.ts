import { Model, Schema, model, models } from "mongoose";

export interface PromptEntity {
  _id: string;
  creator: string;
  body: string;
  tag: string;
}

export const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
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
