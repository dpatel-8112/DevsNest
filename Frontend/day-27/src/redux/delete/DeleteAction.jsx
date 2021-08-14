import { DELETE_TODO } from "./DeleteType";

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export default deleteTodo;
