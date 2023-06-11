import { UserModel, connectToMongo } from "@/libs/mongoose";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

interface Profile {
  email: string;
  name: string;
  picture: string;
}

export const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await UserModel.findOne({
        email: session.user.email,
      });
      session.user.id = sessionUser?._id.toString();

      return session;
    },
    async signIn({ profile }) {
      if (!profile) return false;

      try {
        await connectToMongo();

        const isUserExist = await UserModel.exists({ email: profile.email });

        if (!isUserExist) {
          await UserModel.create({
            email: profile.email,
            name: profile.name,
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
