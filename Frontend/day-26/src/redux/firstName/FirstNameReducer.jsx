import { UPDATE_FIRSTNAME } from "./FirstNameTypes";

const initialState = {
  firstName: "",
};

const firstNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FIRSTNAME:
      return {
        ...state,
        firstName: action.payload,
      };

    default:
      return state;
  }
};

export default firstNameReducer;
