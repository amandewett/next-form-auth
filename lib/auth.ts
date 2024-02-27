import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserService } from "@/app/api/_services/users.service";
const userService = new UserService();

export const nextAuth: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 1 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(cred: any) {
        const response: any = await userService.login(
          cred.email,
          cred.password
        );

        if (response.status) {
          return response.result;
        } else {
          throw new Error(response.message);
        }
      },
    }),
  ],
};

export const getAppSession = () => getServerSession(nextAuth);
