import styled from "styled-components";
import { space } from "../assets/css/params";
import ProductHeader from "./product/ProductHeader";
import { useReducer } from "react";
import {
  ActionType,
  initialState, reducer as productReducer,
  StateType
} from "./product/productReducer";
import { Outlet } from "react-router-dom";
import { Dispatch } from "react";
import isLogin from "./isLogin";

const PageBox = styled.div`
  padding: ${space.space};
  padding-left: 0;
`;

export type ProductsContext = [StateType, Dispatch<ActionType>];

const Products = () => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  return (
    <PageBox>
      <ProductHeader />
      <Outlet context={[state, dispatch]} />
    </PageBox>
  );
};

export default isLogin(Products);
