import { connectToMongo, userService } from "@/libs/mongoose";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await userService.get({
        email: session.user.email as string,
      });

      if (!sessionUser) return session;

      session.user.id = sessionUser._id.toString()!;

      return session;
    },
    async signIn({ profile }) {
      if (!profile) return false;

      try {
        await connectToMongo();

        const isUserExist = await userService.isExist({ email: profile.email });
        if (!profile.email || !profile.picture || !profile.name) return false;

        if (!isUserExist) {
          await userService.create({
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
