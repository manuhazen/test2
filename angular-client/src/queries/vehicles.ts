import gql from "graphql-tag";

export const getVehicles = gql`
  {
    vehicles {
      id
      brand
      model
      year
      new
      milleage
    }
  }
`;

export const createVehicleMutation = gql`
mutation {
  createVehicle(input: {
    $new: Boolean!,
    $brand: String!,
    $model: String!,
    $year: Int!,
    $milleage: Int!
  }) {
    brand
    id
    model
    year
    new
    milleage
  }
}
`;

export const updateVehicleMutation = gql`
mutation {
    createVehicle(input: {
    $id: String!,
    $new: Boolean,
    $brand: String,
    $model: String,
    $year: Int,
    $milleage: Int
  }) {
    brand
    id
    model
    year
    new
    milleage
  }}
`;

export const deleteVehicleMutation = gql`
mutation {
    deleteVehicle($id: String!) {}
}
`;
