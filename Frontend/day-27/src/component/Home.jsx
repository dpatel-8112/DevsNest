import React from "react";
import InputTodo from "./InputTodo";
import ListTodo from "./ListTodo";

function Home() {
  return (
    <div style={{ marginTop: "100px" }}>
      <InputTodo />
      <ListTodo />

      <div
        style={{ position: "absolute", top: "0", left: "0", fontSize: "16px" }}
      >
        <mark>Open Console for More Info about Middleware !!!</mark>
      </div>
    </div>
  );
}

export default Home;
