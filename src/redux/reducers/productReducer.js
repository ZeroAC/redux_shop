import { actionTypes } from "../constants/action-type";
const initialState = {
  products: [
    {
      id: 1,
      title: "hello",
      category: "programmer",
    },
  ],
};
export default productReducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
