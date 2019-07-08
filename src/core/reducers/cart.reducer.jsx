import { cartConstants } from "../constants";

let cart_saved = JSON.parse(localStorage.getItem("cart_saved"));

const initialState = {
  addedItems: [],
  total: 0
};

export function cartReducer(state = { initialState }, action) {
  switch (action.type) {
    case cartConstants.ADD_PRODUCT_TO_CART:
      return processAddToCart(state, action);
    default:
      return state;
  }
}
function processAddToCart(state, action) {
  let addedItem = state.catalog.initialState.items.find(
    item => item.id === action.id
  );
  let existed_item = state.cart.initialState.addedItems.find(
    item => action.id === item.id
  );
  if (existed_item) {
    addedItem.quantity += 1;
    return {
      ...state,
      total: state.total + addedItem.price
    };
  } else {
    addedItem.quantity = 1;
    //calculating the total
    let newTotal = state.total + addedItem.price;

    return {
      ...state,
      addedItems: [...state.addedItems, addedItem],
      total: newTotal
    };
  }
}
