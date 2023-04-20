import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants";
export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeToCart = () => {
  return {
    type: REMOVE_TO_CART,
  };
};
