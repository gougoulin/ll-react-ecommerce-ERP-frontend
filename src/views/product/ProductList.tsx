import { useOutletContext } from "react-router-dom";
import ProductDisplay from "../product/ProductDisplay";
import { ProductsContext } from "../Products";



const ProductList = () => {
  const [state, dispatch] = useOutletContext<ProductsContext>();
  return (
    <>
      <ProductDisplay
        page={state.page}
        dispatch={dispatch}
        isLoading={state.isLoading}
        products={state.products}
      />
    </>
  );
};

export default ProductList;
