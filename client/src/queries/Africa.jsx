import { gql } from "@apollo/client";

export const QUERY_ALL_AFRICA_PRODUCTS = gql`
  query GetAllProducts {
    products {
      data {
        attributes {
          africa {
            data {
              attributes {
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
            }
          }
        }
      }
    }
  }
`