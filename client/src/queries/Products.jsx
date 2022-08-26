import { gql } from '@apollo/client';

export const QUERY_ALL_PRODUCTS = gql`
  query GetAllProducts {
    products {
      data {
        attributes {
          price,
          name,
          roast,
          origin,
          quantity,
          slug,
          images {
            data {
              attributes {
                url
              }
            }
          }
          reviews {
            data {
              attributes {
                review,
                review_name
              }
            }
          }
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