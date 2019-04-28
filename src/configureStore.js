import { createStore, applyMiddleware } from "redux";
import app from "./reducers";
import thunk from "redux-thunk";

const configureStore = () => {
  const middlewares = [thunk];
  return createStore(
    app,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
