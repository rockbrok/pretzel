import { useState } from "react";
import { Link } from "react-router-dom";
// components
import Sort from "./Sort"
// utilities
import Data from "./Data"
// styles
import '../index.css';

export default function Template(props) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);
  const [all, setAll] = useState(true);
  const [roast, setRoast] = useState(false);
  const [roastHighToLow, setRoastHighToLow] = useState(false);
  const [price, setPrice] = useState(false);
  const [priceHighToLow, setPriceHighToLow] = useState(false);
  const [origin, setOrigin] = useState(false);

  return (
    <section className="container">
      <Sort
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        all={all}
        setAll={setAll}
        roastHighToLow={roastHighToLow}
        setRoastHighToLow={setRoastHighToLow}
        roast={roast}
        setRoast={setRoast}
        priceHighToLow={priceHighToLow}
        setPriceHighToLow={setPriceHighToLow}
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
      <div>
        {priceHighToLow ?
          <Data query={props.priceHighToLow} variables={{ input: search }} /> : null}
        {price ?
          <Data query={props.price} variables={{ input: search }} /> : null}
        {roastHighToLow ?
          <Data query={props.roastHighToLow} variables={{ input: search }} /> : null}
        {roast ?
          <Data query={props.roast} variables={{ input: search }} /> : null}
        {all ?
          <Data query={props.all} variables={{ input: search }} /> : null}
      </div>
    </section>
  )
}
