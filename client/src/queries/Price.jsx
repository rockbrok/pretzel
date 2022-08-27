import { gql } from '@apollo/client';

export const QUERY_LOW_TO_HIGH_PRICE = gql`
  query GetPriceLowToHigh($input: String!) {
    products(
      filters: { name : { containsi: $input}}
      sort: "price:asc"
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

export const QUERY_HIGH_TO_LOW_PRICE = gql`
  query GetPriceHighToLow($input: String!) {
    products(
      filters: { name : { containsi: $input}}
      sort: "price:desc"
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