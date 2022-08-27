export default function Sort({ search, setSearch, all, setAll, origin, setOrigin, priceHighToLow, setPriceHighToLow, price, setPrice, roastHighToLow, setRoastHighToLow, roast, setRoast, sort, setSort }) {
  return (
    <section className="flex flex-row justify-end h-max gap-3 mb-4">
      <Search search={search} setSearch={setSearch} />
      <div className="flex flex-col">
        <div className="flex flex-row gap-3">
          {all ? <>
            <span className="material-symbols-outlined select-none">menu</span>&nbsp;
            <button onClick={() => setSort(!sort)}>All</button>
          </> : null}
          {origin ? <>
            <span className="material-symbols-outlined select-none">menu</span>&nbsp;
            <button onClick={() => setSort(!sort)}>By Region</button>
          </> : null}
          {price || priceHighToLow ? <>
            <button onClick={() => setPriceHighToLow(!priceHighToLow) & setRoastHighToLow(false) & setSort(false) & setPrice(!price) & setAll(false) & setOrigin(false) & setRoast(false)}>
              {priceHighToLow ? <span className="material-symbols-outlined select-none">sort</span> : null}
              {!priceHighToLow ? <span className="material-symbols-outlined select-none" style={{ transform: "scaleY(-1)" }}>sort</span> : null}
            </button>&nbsp;
            <button onClick={() => setSort(!sort)}>By Price</button>
          </> : null}
          {roast || roastHighToLow ? <>
            <button onClick={() => setRoastHighToLow(!roastHighToLow) & setPriceHighToLow(false) & setSort(false) & setPrice(false) & setAll(false) & setOrigin(false) & setRoast(!roast)}>
              {roastHighToLow ? <span className="material-symbols-outlined select-none">sort</span> : null}
              {!roastHighToLow ? <span className="material-symbols-outlined select-none" style={{ transform: "scaleY(-1)" }}>sort</span> : null}
            </button>&nbsp;
            <button onClick={() => setSort(!sort)}>By Roast</button>
          </> : null}
        </div>
        {sort ?
          <div className="flex flex-col">
            {all ? "" : <button onClick={() => setSort(false) & setAll(true) & setOrigin(false) & setPrice(false) & setRoast(false) & setRoastHighToLow(false) & setPriceHighToLow(false)}>All</button>}
            {origin ? "" : <button onClick={() => setSort(false) & setOrigin(true) & setAll(false) & setPrice(false) & setRoast(false) & setRoastHighToLow(false) & setPriceHighToLow(false)}>By Region</button>}
            {price || priceHighToLow ? "" : <button onClick={() => setSort(false) & setOrigin(false) & setAll(false) & setPrice(true) & setRoast(false) & setRoastHighToLow(false)}>By Price</button>}
            {roast || roastHighToLow ? "" : <button onClick={() => setSort(false) & setOrigin(false) & setAll(false) & setPrice(false) & setRoast(true) & setPriceHighToLow(false)}>By Roast</button>}
          </div> : null}
      </div>
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
      className="p-1.5 border border-gray-800 h-[50px]"
      onChange={handleChange}
      value={search}
      placeholder="Search.."
      type="search"
    />
  )
}