import React from "react";
import InputTodo from "./InputTodo";
import ListTodo from "./ListTodo";

function Home() {
  return (
    <div>
      <h2>Home</h2>
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
