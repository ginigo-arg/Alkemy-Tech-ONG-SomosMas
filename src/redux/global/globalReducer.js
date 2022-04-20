const initialState = {
  loading: false,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_ON':
      return { loading: true };
    case 'LOADING_OFF':
      return { loading: false };
    default:
      return state;
  }
};

export default globalReducer;
