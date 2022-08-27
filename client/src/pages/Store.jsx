// components
import Template from '../components/Template';
// queries
import { QUERY_PRODUCTS_BY_NAME } from '../queries/Products';
import { QUERY_LOW_TO_HIGH_PRICE } from '../queries/Price';
import { QUERY_LOW_TO_HIGH_ROAST } from '../queries/Roast';
import { QUERY_HIGH_TO_LOW_PRICE } from '../queries/Price';
import { QUERY_HIGH_TO_LOW_ROAST } from '../queries/Roast';
// styles
import '../index.css';

export default function Africa() {
  return (
    <Template 
      all={QUERY_PRODUCTS_BY_NAME}
      priceHighToLow={QUERY_HIGH_TO_LOW_PRICE}
      price={QUERY_LOW_TO_HIGH_PRICE}
      roastHighToLow={QUERY_HIGH_TO_LOW_ROAST}
      roast={QUERY_LOW_TO_HIGH_ROAST}
    />
  )
}