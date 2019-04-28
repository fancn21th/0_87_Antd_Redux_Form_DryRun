const initialState = [];

const ACTION_HANDLERS = {
  FETCH_SUPPLIERS_SUCCESS: (state, action) => ({
    ...state,
    ...action.payload
  })
};

const autoComplete = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
