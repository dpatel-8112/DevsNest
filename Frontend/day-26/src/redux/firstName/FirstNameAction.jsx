import { UPDATE_FIRSTNAME } from "./FirstNameTypes";

const updateFirstName = (input) => {
  return {
    type: UPDATE_FIRSTNAME,
    payload: input,
  };
};

export { updateFirstName };
