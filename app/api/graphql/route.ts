import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs, resolvers } from "@/shared/graphql/schema";
import connect from "@/shared/database/db.connect";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

const dbConnectPromise = connect();

interface Context {
  user?: string | jwt.JwtPayload;
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req): Promise<Context> => {
    await dbConnectPromise;

    try {
      const cookieHeader = req.headers.get("cookie");
      if (!cookieHeader) return {};

      // UPDATED: Now looks for "token=" to match your frontend storage
      const cookie = cookieHeader
        .split(";")
        .find((c) => c.trim().startsWith("token="));
      
      const token = cookie?.split("=")[1]?.trim();
      if (!token) return {};

      // Verify authorization token
      const verifiedUser = jwt.verify(token, process.env.JWT_SECRET || "secretkey");
      return { user: verifiedUser };
    } catch (error) {
      console.error("GraphQL Context Auth Error:", error);
      return {};
    }
  },
});

export async function GET(req: NextRequest) {
  return handler(req);
}

export async function POST(req: NextRequest) {
  return handler(req);
}