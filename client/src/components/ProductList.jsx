import { Link } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';

const QUERY_ALL_PRODUCTS = gql`
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

export default function ProductList(props) {
  const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);

  if (error) return "Error loading products";
  if (loading) return <h1>Fetching</h1>;
  if (data.products && data.products.length) {
    //searchQuery
    const searchQuery = data.products.data.attributes.filter((query) =>
      query.name.toLowerCase().includes(props.search)
    );

    if (searchQuery.length != 0) {
      console.log(searchQuery)
      return (
        <div>
          {searchQuery.map((res) => (
            <div key={res.id}>
              <div style={{ margin: "0 0.5rem 20px 0.5rem" }}>
                <img
                  top={true}
                  style={{ height: 250 }}
                  src={`${process.env.NEXT_PUBLIC_API_URL}${res.image[0].url}`}
                />
                <div>
                  <span>{res.name}</span>
                  <span>{res.description}</span>
                </div>
                <div className="card-footer">
                  <Link
                    as={`/products/${res.id}`}
                    href={`/products?id=${res.id}`}
                  >
                    <a className="btn btn-primary">View</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return <h1>No products Found</h1>;
    }
  }
}
