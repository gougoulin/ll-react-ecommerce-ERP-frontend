import {
  createHashRouter
} from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import DashBoard from "../views/DashBoard";
import Products from "../views/Products";
import ProductDetail from "../views/product/ProductDetail";
import Finance from "../views/Finance";
import ProductList from "../views/product/ProductList";
import ProductNew from "../views/product/ProductNew";
import ProductCategory from "../views/product/ProductCategory";
import ProductListList from "../views/product/ProductListList";

const router = createHashRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, path: "/dashboard", element: <DashBoard /> },
      {
        path: "products",
        element: <Products />,
        children: [
          { index: true, element: <ProductList /> },
          { path: ":id", element: <ProductDetail /> },
          { path: "new", element: <ProductNew /> },
          { path: "category", element: <ProductCategory /> },
          { path: "list", element: <ProductListList /> }
        ]
      },
      {
        path: "finance",
        element: <Finance />
      }
    ]
  }
]);

export default router;
