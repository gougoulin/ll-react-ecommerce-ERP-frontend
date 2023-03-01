import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";

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
