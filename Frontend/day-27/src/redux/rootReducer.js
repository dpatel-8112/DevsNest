import { ADD_TODO } from "./add/AddType";

const initialState = {
  id: 0,
  todo: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, { id: state.id, item: action.payload }],
        id: state.id + 1,
      };

    default:
      return state;
  }
};

export default rootReducer;
