import { gql } from "@apollo/client";

export const QUERY_ALL_SOUTHAMERICA_PRODUCTS = gql`
  query GetAllProducts($input: String!) {
    products(
      filters: { southamerica : {true: { eq: true}} and: [{name: { containsi: $input}}] }
    ) {
      data {
        attributes {
          price,
          name,
          roast,
          origin,
          quantity,
          slug,
          southamerica {
            data {
              attributes {
                true
              }
            }
          },
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

export const QUERY_SOUTHAMERICA_LOW_TO_HIGH_ROAST = gql`
  query GetAllProducts($input: String!) {
    products(
      filters: { southamerica : {true: { eq: true}} and: [{name: { containsi: $input}}] }
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
          africa {
            data {
              attributes {
                true
              }
            }
          },
          asia {
            data {
              attributes {
                true
              }
            }
          },
          southamerica {
            data {
              attributes {
                true
              }
            }
          },
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

export const QUERY_SOUTHAMERICA_HIGH_TO_LOW_ROAST = gql`
  query GetAllProducts($input: String!) {
    products(
      filters: { southamerica : {true: { eq: true}} and: [{name: { containsi: $input}}] }
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
          africa {
            data {
              attributes {
                true
              }
            }
          },
          asia {
            data {
              attributes {
                true
              }
            }
          },
          southamerica {
            data {
              attributes {
                true
              }
            }
          },
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

export const QUERY_SOUTHAMERICA_LOW_TO_HIGH_PRICE = gql`
  query GetAllProducts($input: String!) {
    products(
      filters: { southamerica : {true: { eq: true}} and: [{name: { containsi: $input}}] }
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
          africa {
            data {
              attributes {
                true
              }
            }
          },
          asia {
            data {
              attributes {
                true
              }
            }
          },
          southamerica {
            data {
              attributes {
                true
              }
            }
          },
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

export const QUERY_SOUTHAMERICA_HIGH_TO_LOW_PRICE = gql`
  query GetAllProducts($input: String!) {
    products(
      filters: { southamerica : {true: { eq: true}} and: [{name: { containsi: $input}}] }
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
          africa {
            data {
              attributes {
                true
              }
            }
          },
          asia {
            data {
              attributes {
                true
              }
            }
          },
          southamerica {
            data {
              attributes {
                true
              }
            }
          },
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