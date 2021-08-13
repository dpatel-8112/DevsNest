import { ADD_TODO } from "./AddType";

const addTodo = (input) => {
  return {
    type: ADD_TODO,
    payload: input,
  };
};

export default addTodo;
