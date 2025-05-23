import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/db";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub,
    Credentials({
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.password) {
          return null;
        }

        const validpassword = await bcrypt.compare(
          String(credentials.password),
          user.password
        );
        if (!validpassword) {
          return null;
        }
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
});
