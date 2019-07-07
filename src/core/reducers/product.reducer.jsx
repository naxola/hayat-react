import { productConstants } from "../constants";

const initialState = {
  products: []
};

export function productReducer(state = {}, action) {
  switch (action.type) {
    case productConstants.ADD_PRODUCT:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });

    default:
      return state;
  }
}
