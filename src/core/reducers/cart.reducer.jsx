import { cartConstants } from "../constants";

//let cart_saved = JSON.parse(localStorage.getItem("cart_saved"));

const initialState = {
  addedItems: [
    
    {
      id: 2,
      title: "Booster Serum",
      desc: "yaluronic acid",
      price: 4.99,
      img: "Item1",
      quantity: 1
    }
  ],
  totalPrice: 0
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case cartConstants.ADD_PRODUCT_TO_CART:
      return processAddToCart(state, action);
    case cartConstants.ADD_ITEM_PRODUCT:
      return processAddItemProduct(state, action);
    case cartConstants.SUBSTRACT_ITEM_PRODUCT:
      return processSubstractItemProduct(state, action);
    default:
      return state;
  }
}

function processAddToCart(state, action) {
  let addedItem = action.Item;
  let existed_item = state.addedItems.find(item => addedItem.id === item.id);
  if (existed_item) {
    addedItem.quantity += 1;
    return {
      ...state,
      totalPrice: state.totalPrice + addedItem.price
    };
  } else {
    addedItem.quantity = 1;
    return {
      ...state,
      addedItems: [...state.addedItems, addedItem],
      totalPrice: state.totalPrice + addedItem.price
    };
  }
}
function processAddItemProduct(state, action) {
  let addedItem = state.addedItems.find(item => item.id === action.id);
  addedItem.quantity += 1;
  let newTotal = state.totalPrice + addedItem.price;
  return {
    ...state,
    totalPrice: newTotal
  };
}
function processSubstractItemProduct(state, action) {
  let addedItem = state.addedItems.find(item => item.id === action.id);
  //if the qt == 0 then it should be removed
  if (addedItem.quantity === 1) {
    let new_items = state.addedItems.filter(item => item.id !== action.id);
    return {
      ...state,
      addedItems: new_items,
      totalPrice: 0
    };
  } else {
    addedItem.quantity -= 1;
    let newTotal = state.totalPrice - addedItem.price;
    return {
      ...state,
      totalPrice: newTotal
    };
  }
}
