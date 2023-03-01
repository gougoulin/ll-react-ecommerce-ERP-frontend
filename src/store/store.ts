import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import reduxThunk from "redux-thunk";
import reducer from "./reducers";

const logger = createLogger();

const store = configureStore({
  reducer: reducer,
  middleware: [logger, reduxThunk]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;