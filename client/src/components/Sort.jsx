import { useState } from "react";

export default function Sort({ search, setSearch, all, setAll, origin, setOrigin, price, setPrice, roast, setRoast, sort, setSort, query }) {

  return (
    <section>
      <Search search={search} setSearch={setSearch} />
      <div className="flex flex-row gap-3">
        {all ? <button onClick={() => setSort(!sort)}><span className="material-symbols-outlined">menu</span>&nbsp;All</button> : null}
        {origin ? <button onClick={() => setSort(!sort)}><span className="material-symbols-outlined">menu</span>&nbsp;By Region</button> : null}
        {price ? <button onClick={() => setSort(!sort)}><span className="material-symbols-outlined">sort</span>&nbsp;By Price</button> : null}
        {roast ? <button onClick={() => setSort(!sort)}><span className="material-symbols-outlined">sort</span>&nbsp;By Roast</button> : null}
      </div>
      {sort ?
        <div className="flex flex-col gap-3">
          {all ? "" : <button onClick={() => setSort(false) & setAll(true) & setOrigin(false) & setPrice(false) & setRoast(false)}>All</button>}
          {origin ? "" : <button onClick={() => setSort(false) & setOrigin(true) & setAll(false) & setPrice(false) & setRoast(false)}>By Region</button>}
          {price ? "" : <button onClick={() => setSort(false) & setOrigin(false) & setAll(false) & setPrice(true) & setRoast(false)}>By Price</button>}
          {roast ? "" : <button onClick={() => setSort(false) & setOrigin(false) & setAll(false) & setPrice(false) & setRoast(true)}>By Roast</button>}
        </div> : null}
    </section>
  )
}

const Search = ({ search, setSearch }) => {
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