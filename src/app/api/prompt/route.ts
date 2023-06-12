import { connectToMongo, promptService } from "@/libs/mongoose";
import { PromptInput } from "@/types";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const input = new URL(req.url).searchParams as PromptInput;
  try {
    connectToMongo();

    const prompts = await promptService.getMany(input);

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to get prompts", { status: 500 });
  }
};
