import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addTodo from "../redux/add/AddAction";

function InputTodo() {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (item) {
      dispatch(addTodo(item));
    }
    setItem("");
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <button style={{ cursor: "pointer" }} onClick={addTodoHandler}>
          Add{" "}
        </button>
      </form>
    </div>
  );
}

export default InputTodo;
