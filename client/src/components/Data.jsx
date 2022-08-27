import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

export default function Data(props) {
  const { data, loading, error } = useQuery(props.query, {
    variables: props.variables
  });

  if (loading) {
    return <h1>Data is loading</h1>
  }
  if (error) {
    return <h1>Error :(</h1>
  }
  if (data) {
    console.log(data);
  }

  return (
    <div>
      {data &&
        data.products.data.map((product) => {
          return (
            <Link className="product" to={product.attributes.slug} key={product.attributes.slug}>
              <img style={{ height: "200px", width: "200px" }} src={`http://localhost:1337${product.attributes.images.data[0].attributes.url}`} alt="coffee" />
              <h2 className="product-name">{product.attributes.name}</h2>
              <p className="product-name">Origin: {product.attributes.origin}</p>
              <p className="product-name">Roast: {product.attributes.roast}</p>
              <p className="product-name">Price: {product.attributes.price}/kg</p>
              <p className="product-name">Quantity: {product.attributes.quantity}</p>
              <p className="product-desc">{product.attributes.description}</p>
            </Link>
          )
        })}
    </div>
  )
}