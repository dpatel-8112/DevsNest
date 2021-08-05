import { combineReducers } from "redux";

import firstNameReducer from "./firstName/FirstNameReducer";
import lastNameReducer from "./lastName/LastNameReducer";

const rootReducer = combineReducers({
  firstName: firstNameReducer,
  lastName: lastNameReducer,
});

export default rootReducer;
