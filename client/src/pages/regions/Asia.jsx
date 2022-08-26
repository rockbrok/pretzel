import { toast } from 'react-toastify';
import { io } from 'socket.io-client'
import axios from 'axios'
import { useState, useEffect } from 'react';
import StoreTemplate from '../../components/StoreTemplate';
// styles
import '../../index.css';
import 'react-toastify/dist/ReactToastify.css';

// const socket = io('http://localhost:1337');

// socket.on('hello', (res) => {
//   toast.success(res.message)
// })

export default function Asia({ query }) {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(false);
  const [all, setAll] = useState(true);
  const [roast, setRoast] = useState(false);
  const [price, setPrice] = useState(false);
  const [origin, setOrigin] = useState(false);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:1337/api/asias?populate=deep',
    }).then((res) => {
      const posts = res.data;
      setProducts(posts.data[0].attributes.products.data)
      // console.log(posts.data[0].attributes.products.data)
    })
  }, []);

  return (
    <StoreTemplate 
      query={query}
      products={products}
      setProducts={setProducts}
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
  )
}