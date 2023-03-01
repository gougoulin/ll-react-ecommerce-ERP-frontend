import store from "./store/store";
import { Provider } from "react-redux";
import MainRoutes from "./router/MainRoutes";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const App: () => JSX.Element = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <MainRoutes /> */}
    </Provider>
  );
};

export default App;
