import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Login from "./Login";

const isLogin = (Comp: React.FC) => {
  return () => {
    const isLogin = useSelector((state: RootState) => state.user.isLogin);
    return isLogin ? <Comp /> : <Login />;
  };
};

export default isLogin;
