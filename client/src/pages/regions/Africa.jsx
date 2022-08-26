import Template from '../../components/Template';
// queries
import { QUERY_ALL_PRODUCTS } from "../../queries/Products";
import { QUERY_ALL_AFRICA_PRODUCTS } from '../../queries/Africa';
// styles
import '../../index.css';

export default function Africa() {
  return (
    <Template 
      all={QUERY_ALL_PRODUCTS}
    />
  )
}