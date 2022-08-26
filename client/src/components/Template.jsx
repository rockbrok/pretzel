import { useState } from "react";
import { Link } from "react-router-dom";
// components
import Sort from "./Sort"
// utilities
import Data from "./Data"

export default function Template(props) {
  const [sort, setSort] = useState(false);
  const [all, setAll] = useState(true);
  const [roast, setRoast] = useState(false);
  const [price, setPrice] = useState(false);
  const [origin, setOrigin] = useState(false);

  return (
    <section className="container">
      <Sort
        sort={sort}
        setSort={setSort}
        all={all}
        setAll={setAll}
        roast={roast}
        setRoast={setRoast}
        price={price}
        setPrice={setPrice}
        origin={origin}
        setOrigin={setOrigin}
      />
      {origin ?
        <div className="flex flex-col gap-3">
          <Link to="/store/south-america">South America</Link>
          <Link to="/store/asia">Asia</Link>
          <Link to="/store/africa">Africa</Link>
        </div> : null}

      <div className="flex flex-row gap-3">
        {price ?
          <Data query={props.price} /> : null}
        {roast ?
          <Data query={props.roast} /> : null}
        {all ?
          <Data query={props.all} /> : null}
      </div>
    </section>
  )
}
