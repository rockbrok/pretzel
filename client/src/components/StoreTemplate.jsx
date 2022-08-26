import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { io } from 'socket.io-client'

import '../index.css';
import 'react-toastify/dist/ReactToastify.css';

// const socket = io('http://localhost:1337');

// socket.on('hello', (res) => {
//   toast.success(res.message)
// })

export default function StoreTemplate({ query, products, setProducts, sort, setSort, all, setAll, roast, setRoast, price, setPrice, origin, setOrigin }) {
  let location = useLocation();
  let pathname = location.pathname;
  console.log(pathname)
  return (
    <div className="container">
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
      {price ?
        <div>

        </div> : null}
      {roast ?
        <div>

        </div> : null}
      {origin ?
        <div className="flex flex-col gap-3">
          <Link to="/store/south-america">South America</Link>
          <Link to="/store/asia">Asia</Link>
          <Link to="/store/africa">Africa</Link>
        </div> : null}
      {all ? <div className="products-container">
        {products.map((product) => (

          <Link className="product" to={`${pathname === '/store/africa' && product.attributes.africa.data !== null ? 'africa' : ''}${product.attributes.asia.data !== null ? 'asia' : ''}${product.attributes.southamerica.data !== null ? 'south-america' : ''}${'/'}${product.attributes.slug}`} key={`${product.attributes.slug}`}>
            <img src={`http://localhost:1337${product.attributes.images.data[0].attributes.url}`} alt="coffee" />
            <h2 className="product-name">{product.attributes.name}</h2>
            <p className="product-name">Origin: {product.attributes.origin}</p>
            <p className="product-name">Roast: {product.attributes.roast}</p>
            <p className="product-name">Price: {product.attributes.price}/kg</p>
            <p className="product-name">Quantity: {product.attributes.quantity}</p>
            <p className="product-desc">{product.attributes.description}</p>
          </Link>
        ))}
      </div> : null}
    </div>
  )
}