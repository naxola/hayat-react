import { productConstants } from "../constants";

export const productActions = {
  addProduct,
  fetchSearchData
};

function addProduct(payload) {
  return { type: productConstants.ADD_PRODUCT, payload };
}

function fetchSearchData(args) {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: productConstants.FETCH_SEARCH_DATA
    });
    try {
      // Call the API
      const result = await fetchSearchData(args.pageCount, args.itemsPerPage);

      // Update payload in reducer on success
      dispatch({
        type: productConstants.FETCH_SEARCH_SUCCESS,
        payload: result,
        currentPage: args.pageCount
      });
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: productConstants.FETCH_SEARCH_FAILURE,
        error: err
      });
    }
  };
}
