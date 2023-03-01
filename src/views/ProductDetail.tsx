import { useLocation, useParams, useOutletContext } from "react-router-dom";
import { ProductsContext } from "./Products";

const ProductDetail = () => {
  const [state, dispatch] = useOutletContext<ProductsContext>();
  const params = useParams();
  const location = useLocation();
  return <div>ProductDetail</div>;
};

export default ProductDetail;
