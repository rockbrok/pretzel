import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../index.css'

export default function Product() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios({
      method: 'get',
      url: "http://localhost:1337/api/products?filters[slug]=" + slug + '&populate=*',
    }).then((res) => {
      const posts = res.data;
      setProduct(posts.data)
      console.log(posts.data)
    })
  }, [slug])

  return (
    <div className="container">
      {!product ? (
        <span>Loading...</span>
      ) : (
        <div className="product-detail-container">
          <h1>{product[0].attributes.name}</h1>
          <div className="product-img-container">
            <img src={`http://localhost:1337${product[0].attributes.images.data[0].attributes.url}`} />
          </div>
          <p>{product[0].attributes.description}</p>
          <div className="product-reviews">
            <h2>Reviews ({product[0].attributes.reviews.data.length})</h2>
            {Array.from(product[0].attributes.reviews.data).map((review) => (
              <div className="product-review" key={product[0].attributes.slug}>
                <h3>{review.attributes.review_name}</h3>
                <p>{review.attributes.review}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}