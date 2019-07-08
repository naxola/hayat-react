import { combineReducers } from "redux";

import { catalogReducer } from "./catalog.reducer";
import { cartReducer } from "./cart.reducer";

const rootReducer = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer
});

export default rootReducer;
