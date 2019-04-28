import * as api from "../api";

const fetchSuppliers = filter => (dispatch, getState) => {
  dispatch({
    type: "FETCH_SUPPLIERS_REQUEST",
    filter
  });

  return api.fetchSuppliers(filter).then(function(response) {
    dispatch({
      type: "FETCH_SUPPLIERS_SUCCESS",
      filter,
      suppliers: response.data
    });
  });
};

export default fetchSuppliers;
