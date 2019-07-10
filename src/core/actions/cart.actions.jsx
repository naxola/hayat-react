import { cartConstants } from "../constants";

/*
export const cartActions = {
  addToCart,
  removeItem,
  addQuantity,
  subtractQuantity
};*/

export const addToCart = Item => {
  return { type: cartConstants.ADD_PRODUCT_TO_CART, Item };
};
export const removeItem = id => {
  return { type: cartConstants.REMOVE_PRODUCT_FROM_CART, id };
};
export const addQuantity = id => {
  return { type: cartConstants.ADD_ITEM_PRODUCT, id };
};
export const subtractQuantity = id => {
  return { type: cartConstants.SUBSTRACT_ITEM_PRODUCT, id };
};
