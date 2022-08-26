import { gql } from '@apollo/client';

export const QUERY_LOW_TO_HIGH_ROAST = gql`
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

export const QUERY_HIGH_TO_LOW_ROAST = gql`
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