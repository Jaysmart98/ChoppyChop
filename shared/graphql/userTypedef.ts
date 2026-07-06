import { gql } from "graphql-tag";

export const userTypeDefs = gql`
  enum Role {
    CUSTOMER
    VENDOR
    RIDER
  }

  type User {
    id: ID!
    name: String!
    email: String!
    phone: String!
    role: Role!
    createdAt: String!
    profile: Profile
  }

  type Profile {
    firstName: String
    lastName: String
    phone: String
    address: String
    avatarUrl: String
  }

  input UserUpdateInput {
    firstName: String
    lastName: String
    phone: String
    address: String
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    me: User
    getUser(id: ID!): User
  }

  type Mutation {
    # This matches the 'registeruser' in your resolver
    registeruser(
      name: String!, 
      email: String!, 
      phone: String!, 
      password: String!, 
      role: String!
    ): AuthPayload!
    
    login(input: LoginInput!): AuthPayload!
    updateProfile(input: UserUpdateInput!): User!
  }
`;