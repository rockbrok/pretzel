import { gql } from '@apollo/client';

export const QUERY_LOW_TO_HIGH_PRICE = gql`
  query GetPriceLowToHigh {
    products {
      data {
        attributes {
          price
          name
          origin
          quantity
        }
      }
    }
  }
`;

export const QUERY_HIGH_TO_LOW_PRICE = gql`
  query GetPriceHighToLow {
    products {
      data {
        attributes {
          price
          name
          origin
          quantity
        }
      }
    }
  }
`;