import { UPDATE_LASTNAME } from "./LastNameType";

const updateLastName = (input) => {
  return {
    type: UPDATE_LASTNAME,
    payload: input,
  };
};

export { updateLastName };
