import Template from '../components/Template';
// queries
import { QUERY_ALL_PRODUCTS } from "../queries/Products";
import { QUERY_PRODUCTS_BY_NAME } from '../queries/Products';
// styles
import '../index.css';

export default function Africa() {
  return (
    <Template 
      all={QUERY_PRODUCTS_BY_NAME}
      price={QUERY_ALL_PRODUCTS}
      roast={QUERY_ALL_PRODUCTS}
    />
  )
}