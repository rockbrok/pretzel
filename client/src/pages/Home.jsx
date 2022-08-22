import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { io } from 'socket.io-client'

import ProductList from '../components/ProductList';

import '../index.css';
import 'react-toastify/dist/ReactToastify.css';

const socket = io('http://localhost:1337');

socket.on('hello', (res) => {
  toast.success(res.message)
})

export default function Home() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:1337/api/products?populate=*',
    }).then((res) => {
      const posts =  res.data;
      setProducts(posts.data)
    })
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(query)
  }

  return (
    <div className="container">
      <h1>Products</h1>

      <input
        onChange={handleChange}
        value={query}
        placeholder="Search.."
      />
      <ProductList search={query} />
      {/* <div className="products-container">
        {products.map((product) => (
          <Link className="product" to={`${product.attributes.slug}`} key={`${product.attributes.slug}`}>
            <img src={`http://localhost:1337${product.attributes.images.data[0].attributes.url}`} alt="coffee"/>
            <h2 className="product-name">{product.attributes.name}</h2>
            <p className="product-desc">{product.attributes.description}</p>
          </Link>
        ))}
      </div> */}
    </div>
  )
}