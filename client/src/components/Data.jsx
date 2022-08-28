import { useQuery } from "@apollo/client";
import { Link, useLocation } from "react-router-dom";
// styles
import '../index.css';

export default function Data(props) {
  const { data, /* loading, */ error } = useQuery(props.query, {
    variables: props.variables
  });
  // if (loading) {
  //   return <h1>Data is loading</h1>
  // }
  if (error) {
    return <h1>Error :(</h1>
  }
  if (data) {
    console.log(data);
  }

  return (
    <div className="products-container">
      {data &&
        data.products.data.map((product) => {
          return (
            <Link className="product" to={Location({product})} key={product.attributes.slug}>
              <h1 className="text-xl uppercase">{product.attributes.name}</h1>
              <div className="flex flex-row justify-between w-full px-3">
                <img style={{ height: "100px", width: "100px" }} src={`http://localhost:1337${product.attributes.images.data[0].attributes.url}`} alt="coffee" />
                <div className="flex flex-col">
                  <p className="product-name">Origin: {product.attributes.origin}</p>
                  <p className="product-name">Quantity: {product.attributes.quantity}</p>
                </div>
              </div>
              <div className="flex flex-row justify-between w-full p-3">
                <Roast product={product} />
                <p className="">${product.attributes.price}/kg</p>
              </div>
              {/* <p className="product-desc">{product.attributes.description}</p> */}
            </Link>
          )
        })}
    </div>
  )
};

function Location({product}) {
  let location = useLocation();
  let pathname = location.pathname;

  if (pathname === "/store") {
    return (
      product.attributes.region + "/" + product.attributes.slug
    )
  } else {
    return (
      product.attributes.slug
    )
  }
};

const Roast = ({ product }) => {
  if (product.attributes.roast === 1) {
    return (
      <RoastRow>
        <BlackCircle />
        <WhiteCircle />
        <WhiteCircle />
        <WhiteCircle />
      </RoastRow>
    )
  } else if (product.attributes.roast === 2) {
    return (
      <RoastRow>
        <BlackCircle />
        <BlackCircle />
        <WhiteCircle />
        <WhiteCircle />
      </RoastRow>
    )
  } else if (product.attributes.roast === 3) {
    return (
      <RoastRow>
        <BlackCircle />
        <BlackCircle />
        <BlackCircle />
        <WhiteCircle />
      </RoastRow>
    )
  } else if (product.attributes.roast === 4) {
    return (
      <RoastRow>
        <BlackCircle />
        <BlackCircle />
        <BlackCircle />
        <BlackCircle />
      </RoastRow>
    )
  }
};

const RoastRow = (props) => (
  <div className="flex flex-row gap-1">
    {props.children}
  </div>
);

const BlackCircle = () => <div className="rounded-full w-4 h-4 bg-black" />;
const WhiteCircle = () => <div className="rounded-full w-4 h-4 border-black border-[1px]" />;