import HYDRATE from "next-redux-wrapper";

const initialState = {
  name: "secho",
  password: "1234",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};

export default rootReducer;
