import NextAuth, { NextAuthOptions } from "next-auth";
import DuendeIDS6Provider from "next-auth/providers/duende-identity-server6";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    DuendeIDS6Provider({
      id: "duende-identity-server6",
      name: "Duende Identity Server 6",
      version: "2.0",
      accessTokenUrl: "https://localhost:5001/connect/token",
      requestTokenUrl: "https://localhost:5001/connect/token",
      profileUrl: "https://localhost:5001/connect/userinfo",
      clientId: "next-auth",
      clientSecret: "secret",
      profile: (profile) => {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          username: profile.preferred_username,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, profile, account }) {
      if (profile) {
        token.username = profile.name;
      }
      if (account) {
        token.access_token = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        //session.user.name = token.name;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
