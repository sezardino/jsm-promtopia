import { connectToMongo, promptService } from "@/libs/mongoose";
import { CreatePromptInput } from "@/types";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as CreatePromptInput;

  try {
    connectToMongo();

    const newPrompt = await promptService.create(body);

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create new prompt", { status: 500 });
  }
};
