import { GraphQLError } from "graphql";
import bcrypt from "bcryptjs";
import UserModel from "@/shared/database/model/user.model";
import { createToken } from "@/shared/lib/auth";

export const userResolvers = {
  Query: {
    me: async (_: any, __: any, context: any) => {
      if (!context.user) throw new GraphQLError("Not authenticated");
      return await UserModel.findById(context.user.id);
    },
    getUser: async (_: any, { id }: { id: string }) => {
      return await UserModel.findById(id);
    },
  },

  Mutation: {
    registeruser: async (_: any, args: any) => {
      const { name, email, phone, password, role } = args;
      
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) throw new GraphQLError("User already exists");

      const hashedPassword = await bcrypt.hash(password, 10);
      
      const user = await UserModel.create({
        name,
        email,
        phone,
        password: hashedPassword,
        role,
      });

      const token = await createToken({ id: user._id.toString(), role: user.role });
      
      return { token, user };
    },

    login: async (_: any, { input }: any) => {
      const { email, password } = input;
      const user = await UserModel.findOne({ email });
      
      if (!user) throw new GraphQLError("Invalid credentials");
      
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw new GraphQLError("Invalid credentials");

      const token = await createToken({ id: user._id.toString(), role: user.role });
      return { token, user };
    },

    updateProfile: async (_: any, { input }: any, context: any) => {
      if (!context.user) throw new GraphQLError("Not authenticated");
      
      return await UserModel.findByIdAndUpdate(
        context.user.id,
        { $set: input },
        { new: true, runValidators: true }
      );
    },
  },
};