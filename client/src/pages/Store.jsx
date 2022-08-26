import Template from '../components/Template';
// queries
import { QUERY_ALL_PRODUCTS } from "../queries/Products";
// styles
import '../index.css';

export default function Africa() {
  return (
    <Template 
      all={QUERY_ALL_PRODUCTS}
      price={QUERY_ALL_PRODUCTS}
      roast={QUERY_ALL_PRODUCTS}
    />
  )
}