import gql from "graphql-tag";

export const getApartments = gql`
  {
    apartments {
      id
      type
      island
      size
      bathrooms
      rooms
      balcony
    }
  }
`;

export const createApartmentMutation = gql`
mutation {
  createApartment(input{ 
    $type: String!,
    $island: Boolean!,
    $size: Int!
    balcony: Boolean!
    bathrooms: Float!
    rooms: Float!
  }) {
    id
    type
    island
    size
    balcony
    bathrooms
    rooms
  }
}
`;

export const updateApartamentMutation = gql`
mutation {
    createApartment(input{ 
        $id: String,
        $type: String,
        $island: Boolean,
        $size: Int
        balcony: Boolean
        bathrooms: Float
        rooms: Float
    }) {
        id
        type
        island
        size
        balcony
        bathrooms
        rooms
    }
    }
`;

export const deleteApartmentMutation = gql`
    mutation {
        deleteApartment($id: String)
    }
`;
