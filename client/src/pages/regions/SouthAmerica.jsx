// components
import Template from '../../components/Template';
// queries
import { 
  QUERY_ALL_SOUTHAMERICA_PRODUCTS, 
  QUERY_SOUTHAMERICA_LOW_TO_HIGH_PRICE, 
  QUERY_SOUTHAMERICA_HIGH_TO_LOW_PRICE,
  QUERY_SOUTHAMERICA_HIGH_TO_LOW_ROAST,
  QUERY_SOUTHAMERICA_LOW_TO_HIGH_ROAST 
} from '../../queries/SouthAmerica';

// styles
import '../../index.css';

export default function SouthAmerica() {
  return (
    <Template 
      all={QUERY_ALL_SOUTHAMERICA_PRODUCTS}
      priceHighToLow={QUERY_SOUTHAMERICA_HIGH_TO_LOW_PRICE}
      price={QUERY_SOUTHAMERICA_LOW_TO_HIGH_PRICE}
      roastHighToLow={QUERY_SOUTHAMERICA_HIGH_TO_LOW_ROAST}
      roast={QUERY_SOUTHAMERICA_LOW_TO_HIGH_ROAST}
    />
  )
}