// components
import Template from '../../components/Template';
// queries
import {
   QUERY_ALL_ASIA_PRODUCTS,
   QUERY_ASIA_HIGH_TO_LOW_PRICE,
   QUERY_ASIA_LOW_TO_HIGH_PRICE,
   QUERY_ASIA_HIGH_TO_LOW_ROAST,
   QUERY_ASIA_LOW_TO_HIGH_ROAST
} from '../../queries/Asia';
// styles
import '../../index.css';

export default function Asia() {
  return (
    <Template 
      all={QUERY_ALL_ASIA_PRODUCTS}
      priceHighToLow={QUERY_ASIA_HIGH_TO_LOW_PRICE}
      price={QUERY_ASIA_LOW_TO_HIGH_PRICE}
      roastHighToLow={QUERY_ASIA_HIGH_TO_LOW_ROAST}
      roast={QUERY_ASIA_LOW_TO_HIGH_ROAST}
    />
  )
}