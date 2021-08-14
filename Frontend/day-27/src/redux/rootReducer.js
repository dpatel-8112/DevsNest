import { ADD_TODO } from "./add/AddType";
import { DELETE_TODO } from "./delete/DeleteType";

const initialState = {
  todo: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((item, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
