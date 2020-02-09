import gql from "graphql-tag";

export const getProducts = gql`
  {
    laptops {
      id
      brand
      cpu
    }
    vehicles {
      id
      brand
      model
    }
    apartments {
      id
      type
      balcony
      size
    }
  }
`;
