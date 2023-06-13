import { connectToMongo, userService } from "@/libs/mongoose";
import { UserInput } from "@/types";
import { NextApiRequest } from "next";

export const GET = async (req: NextApiRequest) => {
  const params = new URL(req.url || "").searchParams;

  const input: UserInput = {
    id: params.get("id") || undefined,
    email: params.get("email") || undefined,
  };

  if (!input.id && !input.email)
    return new Response("Missing id or email", { status: 400 });

  try {
    connectToMongo();

    const user = await userService.get(input);

    if (!user) return new Response("User not found", { status: 404 });

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong when try to get user", {
      status: 500,
    });
  }
};
