import React from "react";
import { useDispatch, useSelector } from "react-redux";
import deleteTodo from "../redux/delete/DeleteAction";

function ListTodo() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {state.todo.map((value, index) => {
          //   console.log(value.item);
          return (
            <div
              style={{
                display: "flex",
                maxWidth: "360px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <li style={{ listStyle: "none" }}>👉 {value}</li>
              </div>
              {console.log(value)}
              <div style={{ paddingLeft: "10px" }}>
                <button
                  style={{ padding: "5px 10px" }}
                  data-id={value.id}
                  onClick={() => dispatch(deleteTodo(index))}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ListTodo;
