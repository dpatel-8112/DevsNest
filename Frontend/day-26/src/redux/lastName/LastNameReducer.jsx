import { UPDATE_LASTNAME } from "./LastNameType";

const initialState = {
  lastName: "",
};

const lastNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LASTNAME:
      return {
        ...state,
        lastName: action.payload,
      };

    default:
      return state;
  }
};

export default lastNameReducer;
