const initialState = {
    isError: false,
    error: {},
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'NEW_ERROR': {
        const newState = Object.assign({}, initialState);
        newState.isError = true;
        newState.error = action.payload.message;
        return newState;
      }
      case 'REACT_NATIVE_ROUTER_FLUX_FOCUS':
      case 'ERROR_CLEARED': {
        const newState = Object.assign({}, initialState);
        return newState;
      }
      default:
        return state;
    }
  }