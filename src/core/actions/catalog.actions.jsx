import { catalogConstants } from "../constants";

export const catalogActions = {
  addProduct,
  fetchSearchData
};

function addProduct(payload) {
  return { type: catalogConstants.ADD_PRODUCT, payload };
}

function fetchSearchData(args) {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: catalogConstants.FETCH_SEARCH_DATA
    });
    try {
      // Call the API
      const result = await fetchSearchData(args.pageCount, args.itemsPerPage);

      // Update payload in reducer on success
      dispatch({
        type: catalogConstants.FETCH_SEARCH_SUCCESS,
        payload: result,
        currentPage: args.pageCount
      });
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: catalogConstants.FETCH_SEARCH_FAILURE,
        error: err
      });
    }
  };
}
