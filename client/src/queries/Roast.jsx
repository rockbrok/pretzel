import { gql } from '@apollo/client';

export const QUERY_LOW_TO_HIGH_ROAST = gql`
  query GetRoastLowToHigh($input: String!) {
    products(
      filters: { name : { containsi: $input}}
      sort: "roast:asc"
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

export const QUERY_HIGH_TO_LOW_ROAST = gql`
  query GetRoastHighToLow($input: String!) {
    products(
      filters: { name : { containsi: $input}}
      sort: "roast:desc"
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