import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

import { usertypeDefs } from "./userTypedef";
import { userresolvers } from "./userResolver";
import { blogtypeDefs } from "./blogTypedef";
import { blogresolvers } from "./blogResolver";

export const typeDefs = mergeTypeDefs([usertypeDefs, blogtypeDefs]);

export const resolvers = mergeResolvers([userresolvers, blogresolvers]);