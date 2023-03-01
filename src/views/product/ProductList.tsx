import { SyntheticEvent } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { colors, space } from "../../assets/css/params";
import ProductDisplay from "../product/ProductDisplay";
import { actions } from "../product/productReducer";
import { ProductsContext } from "../Products";

const Pagination = styled.div`
  width: 50vw;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;
const PaginationBtn = styled(NavLink)`
  flex: 0 0 ${space.mSpace};
  height: ${space.mSpace};
  margin: 10px;
  text-align: center;
  line-height: ${space.mSpace};
  background-color: ${colors.gray1};
  color: ${colors.gray11};
  border-radius: ${space.sxSpace};
  text-decoration: none;

  :hover {
    background-color: ${colors.primary.lighter};
    color: ${colors.gray1};
  }
  :active {
    background-color: ${colors.primary.base};
  }
`;

const ProductList = () => {
  const [state, dispatch] = useOutletContext<ProductsContext>();
  // const { state, dispatch } = context;
  const onClick = (page: number, ev: SyntheticEvent) => {
    ev.preventDefault();
    let nextPage = 1;
    if (page === 0) {
      if (ev.currentTarget.textContent !== null) {
        nextPage = +ev.currentTarget.textContent;
      }
    } else {
      nextPage = page + state.page;
    }
    if (nextPage > 0) {
      dispatch(actions.to(nextPage));
    }
  };
  return (
    <>
      <ProductDisplay
        page={state.page}
        dispatch={dispatch}
        isLoading={state.isLoading}
        products={state.products}
      />
      <Pagination>
        <PaginationBtn onClick={onClick.bind(null, -1)} to="">
          &lt;
        </PaginationBtn>
        <PaginationBtn onClick={onClick.bind(null, 0)} to="">
          {1}
        </PaginationBtn>
        <PaginationBtn onClick={onClick.bind(null, 0)} to="">
          {2}
        </PaginationBtn>
        <PaginationBtn onClick={onClick.bind(null, 0)} to="">
          {3}
        </PaginationBtn>
        <PaginationBtn onClick={onClick.bind(null, 0)} to="">
          {4}
        </PaginationBtn>
        <PaginationBtn onClick={onClick.bind(null, 1)} to="">
          &gt;
        </PaginationBtn>
      </Pagination>
    </>
  );
};

export default ProductList;
