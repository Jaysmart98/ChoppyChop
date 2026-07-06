import { gql } from "graphql-tag";

export const menuTypeDefs = gql`
  type Menu {
    id: ID!
    name: String!
    food: String!
    price: String!
    img: String
    rating: Float
  }

  input AddMenuInput {
    name: String!
    food: String!
    price: String!
    img: String
  }

  extend type Query {
    getMenu: [Menu!]!
  }

  extend type Mutation {
    addMenuItem(input: AddMenuInput!): Menu!
  }
`;