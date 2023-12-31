import { connectToMongo, promptService } from "@/libs/mongoose";
import { PromptInput } from "@/types";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const params = new URL(req.url).searchParams;

  const input: PromptInput = {
    creator: params.get("creator") || undefined,
    search: params.get("search") || undefined,
    tag: params.get("tag") || undefined,
    page: parseInt(params.get("page") || "") || undefined,
    limit: parseInt(params.get("limit") || "") || undefined,
  };

  try {
    connectToMongo();

    const prompts = await promptService.getMany(input);

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to get prompts", { status: 500 });
  }
};
