const initialState = {
  suppliers: []
};

const FETCH_SUPPLIERS_REQUEST = "FETCH_SUPPLIERS_REQUEST";
const FETCH_SUPPLIERS_SUCCESS = "FETCH_SUPPLIERS_SUCCESS";
const FETCH_SUPPLIERS_FAILURE = "FETCH_SUPPLIERS_FAILURE";

const ACTION_HANDLERS = {
  [FETCH_SUPPLIERS_SUCCESS]: (state, action) => ({
    ...state,
    suppliers: action.suppliers
  })
};

const reduxForm = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default reduxForm;
