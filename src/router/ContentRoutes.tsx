import { Routes, Route, Navigate } from "react-router-dom";
import Analysis from "../views/Analysis";
import DashBoard from "../views/DashBoard";
import Orders from "../views/Orders";
import ProductDetail from "../views/ProductDetail";
import ProductList from "../views/ProductList";
import ProductNew from "../views/ProductNew";
import Products from "../views/Products";
import Settings from "../views/Settings";

const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/products" element={<Products />}>
        <Route path="" element={<ProductList />} />
        <Route path="new" element={<ProductNew />} />
        <Route path=":id" element={<ProductDetail />} />
      </Route>
      <Route path="/orders" element={<Orders />} />
      <Route path="/finance" element={<Products />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/admin" element={<Products />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default ContentRoutes;
