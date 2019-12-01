import { combineReducers } from "redux";
import { authenticationReducer } from "./modules/core/authentication/authentication.reducer";

const reducers = {
  auth: authenticationReducer
};

const appReducer = combineReducers(reducers);

export default appReducer;
