import styled from "styled-components";
import { space } from "../../assets/css/params";
import ProductCard from "../product/ProductCard";
import { useEffect } from "react";
import { keyId } from "../../utils/helper";
import LoadingComponent from "../../components/LoadingComponent";
import {
  actions,
  ActionType,
  Product,
  productsApi
} from "../product/productReducer";
import images from "../../assets/img";

const ProductsDisplayBox = styled.div`
  /* width: 1400px;
  margin: 0 auto; */
  display: grid;
  gap: ${space.lSpace};
  padding: ${space.lSpace} 0;
  grid-template-columns: repeat(5, auto);
  justify-content: center;
  /* justify-content: space-evenly; */
`;

const StyledLoading = styled(LoadingComponent)`
  height: 600px;
  min-width: 1600px;
  place-content: center;
  grid-column: 1 / span 4;

  h1 {
    flex: 0 0 100%;
    text-align: center;
    font-size: 96px;
  }
`;

interface ProductDisplayProps {
  page: number;
  dispatch: (action: ActionType) => void;
  products: Product[];
  isLoading: boolean;
}

const limit = 10;

const ProductDisplay = ({
  page,
  dispatch,
  products,
  isLoading
}: ProductDisplayProps) => {
  const productList = products
    .slice((page - 1) * limit, page * limit)
    .map(({ productTitle, price, description }, id: number) => {
      let img = images[id % 10];
      return (
        <ProductCard
          key={keyId(id)}
          title={price}
          imgSrc={img}
          textContentBold={productTitle}
          textContext={description}
        />
      );
    });
  useEffect(() => {
    dispatch(actions.startLoading());
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsApi.products);
        dispatch(actions.endLoading());
      }, 3000);
    })
      .then((products) => {
        dispatch(actions.init(products as Product[]));
      })
      .catch((err) => {
        console.error(err.message);
        dispatch(actions.endLoading());
      });
  }, []);

  return (
    <ProductsDisplayBox>
      {isLoading ? <StyledLoading /> : productList}
    </ProductsDisplayBox>
  );
};

export default ProductDisplay;
