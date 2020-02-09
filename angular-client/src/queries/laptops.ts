import gql from "graphql-tag";

export const getLaptops = gql`
  {
    laptops {
      model
      brand
      cpu
      ram
      ramType
      year
      id
      size
    }
  }
`;

export const createLaptopMutation = gql`
mutation {
  createLaptop(input:{
    $gpu: String!,
    $cpu: String!,
    $ram: String!,
    $ramType: String!,
    $size: String!,
    $brand: String!,
    $model: String!,
    $year: Int!,
  }) {
    id
    brand
    model
    year
    size
  }
}`;

export const updateLaptopMutation = gql`
  mutation {
    updateLaptop(
      $id: ID
      $gpu: String
      $cpu: String
      $ram: String
      $ramType: String
      $size: String
      $brand: String
      $model: String
      $year: Int
    ) {
      id
      brand
      model
      year
    }
  }
`;

export const deleteLaptopMutation = gql`
  mutation {
    deleteLaptop($id: ID!) {}
  }
`;
