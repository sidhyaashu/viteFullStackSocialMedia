import { combineReducers } from "redux";
import authReducers from "./AuthReducers";
import postReducer from "./PostReducers";


export const reducer = combineReducers({authReducers,postReducer})