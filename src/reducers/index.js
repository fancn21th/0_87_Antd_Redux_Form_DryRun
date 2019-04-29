import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import autoComplete from "./autoComplete";
import reduxForm from "./reduxForm";

const app = combineReducers({
  reduxForm,
  autoComplete,
  form: formReducer
});

export default app;
