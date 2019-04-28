import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import autoComplete from "./autoComplete";

const app = combineReducers({
  autoComplete,
  form: formReducer
});

export default app;
