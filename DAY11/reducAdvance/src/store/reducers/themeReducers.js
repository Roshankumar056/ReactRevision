const initialState = {
mode:""
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST":
      return { ...state, loading: true };
    case "SUCCESS":
      return { ...state, post: action.payload };
    case "FAILURE":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
