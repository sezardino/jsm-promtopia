import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Profile {
    email: string;
    name: string;
    picture: string;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image: string;
    } & DefaultSession["user"];
  }
}
