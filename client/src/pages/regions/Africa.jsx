// components
import Template from '../../components/Template';
// queries
import { 
  QUERY_ALL_AFRICA_PRODUCTS, 
  QUERY_AFRICA_HIGH_TO_LOW_PRICE,
  QUERY_AFRICA_LOW_TO_HIGH_PRICE,
  QUERY_AFRICA_HIGH_TO_LOW_ROAST,
  QUERY_AFRICA_LOW_TO_HIGH_ROAST
} from '../../queries/Africa';
// styles
import '../../index.css';

export default function Africa() {
  return (
    <Template 
      all={QUERY_ALL_AFRICA_PRODUCTS}
      priceHighToLow={QUERY_AFRICA_HIGH_TO_LOW_PRICE}
      price={QUERY_AFRICA_LOW_TO_HIGH_PRICE}
      roastHighToLow={QUERY_AFRICA_HIGH_TO_LOW_ROAST}
      roast={QUERY_AFRICA_LOW_TO_HIGH_ROAST}
    />
  )
}