import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import ContentRoutes from "./ContentRoutes";
import Analysis from "../views/Analysis";
import DashBoard from "../views/DashBoard";
import Orders from "../views/Orders";
import Products from "../views/Products";
import Settings from "../views/Settings";
import ProductDetail from "../views/ProductDetail";
import Finance from "../views/Finance";
import ProductList from "../views/ProductList";

const MainRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />,
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default MainRoutes;
