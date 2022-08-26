import { gql } from '@apollo/client';

export const QUERY_LOW_TO_HIGH_PRICE = gql`
  { 
    products {
      data {
        attributes {
          name
          slug
        }
      }
    }
  }
`;

export const QUERY_HIGH_TO_LOW_PRICE = gql`
  { 
    products {
      data {
        attributes {
          name
          slug
        }
      }
    }
  }
`;