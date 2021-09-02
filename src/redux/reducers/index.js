import { combineReducers } from "redux"; //将多个reducer(每个负责state的一部分)组合成一个reducer
import productReducer from "./productReducer";

const reducers = combineReducers({ allProducts: productReducer });
export default reducers;
