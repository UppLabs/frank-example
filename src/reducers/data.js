const initialState = {
    providers: []
};
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_PROVIDERS':
        return {...state, providers: action.payload};
      default:
        return state;
    }
  }