import { useState } from "react";

export default function Sort({ all, setAll, origin, setOrigin, price, setPrice, roast, setRoast, sort, setSort, query }) {

  return (
    <section>
      <Search query={query} />
      <div className="flex flex-row gap-3">
        {all ? "All" : null}
        {origin ? "By origin" : null}
        {price ? "By price" : null}
        {roast ? "By roast" : null}
        <button onClick={() => setSort(!sort)}><span className="material-symbols-outlined">sort</span></button>
      </div>
      {sort ?
        <div className="flex flex-col gap-3">
          <button onClick={() => setSort(false) & setAll(true) & setOrigin(false) & setPrice(false) & setRoast(false)}>All</button>
          <button onClick={() => setSort(false) & setOrigin(true) & setAll(false) & setPrice(false) & setRoast(false)}>Origin</button>
          <button onClick={() => setSort(false) & setOrigin(false) & setAll(false) & setPrice(false) & setRoast(true)}>Roast</button>
          <button onClick={() => setSort(false) & setOrigin(false) & setAll(false) & setPrice(true) & setRoast(false)}>Price</button>
        </div> : null}
    </section>
  )
}

const Search = ({ query }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <input
      className="p-1.5 border border-gray-800"
      onChange={handleChange}
      value={search}
      placeholder="Search.."
      type="search"
    />
  )
}