// we need to handle multiple routes because NextAuth expose it
import { getUser, verifyPassword } from "@modules/member/store/api/helper";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@modules/member/libraries/member-types";
import NextAuth from "next-auth";
import { hash } from "bcryptjs";
import * as fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data/dev-data/users.json");

// will return a "handler" function
export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "string" },
      },
      // next js will call this method for every incoming login request
      async authorize(credential) {
        const data: User[] = JSON.parse(
          fs.readFileSync(filePath, { encoding: "utf-8" })
        );
        let email: string = "";
        let password: string = "";
        if (credential)
          [email, password] = [credential.email, credential.password];
        const user = getUser(data, "email", email);
        if (!user) {
          return null;
        }
        if (!(await verifyPassword(password, user.password))) {
          return null;
        }
        return {
          email: user.email,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
