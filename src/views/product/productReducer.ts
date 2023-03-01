import productJson from "../../api/products.json";

export interface StateType {
  products: Product[];
  isLoading: boolean;
  page: number;
}

export const initialState = {
  products: [] as Product[],
  isLoading: false,
  page: 1
};

export interface ActionType {
  type: string;
  payload?: unknown;
}

const PRODUCTS_INIT = "products/init";
const LOADING = "products/loading";
const LOADING_DONE = "products/loading_done";
const TO_PAGE = "products/to_page"

export const actions = {
  init: (data: Product[]): ActionType => {
    return {
      type: PRODUCTS_INIT,
      payload: data
    };
  },
  startLoading: () => {
    return {
      type: LOADING
    };
  },
  endLoading: () => {
    return {
      type: LOADING_DONE
    };
  },
  to: (page: number) => {
    return {
      type: TO_PAGE,
      payload: page
    }
  }
};

export const reducer = (state: StateType, action: ActionType): StateType => {
  let nextState = { ...state };
  switch (action.type) {
    case PRODUCTS_INIT:
      nextState.products = action.payload as Product[];
      break;
    case LOADING:
      nextState.isLoading = true;
      break;
    case LOADING_DONE:
      nextState.isLoading = false;
      break;
    case TO_PAGE:
      nextState.page = action.payload as number;
      break;
    default:
      break;
  }
  return nextState;
};

export interface Product {
  price: string;
  productTitle: string;
  description: string;
}

export const productsApi = {
  products: productJson
};