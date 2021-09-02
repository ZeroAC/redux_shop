import { createStore } from "redux";
import reducers from "./reducers/index";

const store = createStore(reducers, {}); //创建store 初始值为空

export default store;
