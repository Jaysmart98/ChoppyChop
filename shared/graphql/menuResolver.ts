import { Menu } from "@/shared/database/model/menu.model";
import { GraphQLError } from "graphql";

export const menuResolvers = {
  Query: {
    getMenu: async () => {
      return await Menu.find({});
    },
  },

  Mutation: {
    addMenuItem: async (_: any, { input }: any, context: any) => {
      // Optional: Add check to ensure only vendors can add items
      // if (context.user?.role !== "VENDOR") throw new GraphQLError("Unauthorized");

      const newItem = await Menu.create(input);
      return newItem;
    },
  },
};