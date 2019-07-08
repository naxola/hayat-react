import { cartConstants } from "../constants";

export const cartActions = {
  addToCart
};
//payload es el id del producto
function addToCart(payload) {
  return { type: cartConstants.ADD_PRODUCT_TO_CART, payload };
}
