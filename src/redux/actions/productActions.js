import { actionTypes } from "../constants/action-type";

export const setProducts = (products) => {
  //设置动作的具体内容(用于给dispatch传参)
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
