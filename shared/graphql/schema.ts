import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

import { userTypeDefs } from "./userTypedef";
import { userResolvers } from "./userResolver";
import { menuTypeDefs } from "./menuTypedef";  
import { menuResolvers } from "./menuResolver";   

export const typeDefs = mergeTypeDefs([userTypeDefs, menuTypeDefs]);
export const resolvers = mergeResolvers([userResolvers, menuResolvers]);