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

export const QUERY_PRODUCTS_BY_NAME = gql`
  query GetAllProducts($input: String!) {
    products(
      filters: { name : { containsi: $input}}
    ) {
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
