import React, { useState } from "react";
import style from "./Items.module.css";

function Item({ item }) {
  const [deleted, setDeleted] = useState(true);

  console.log(item);
  return deleted ? (
    <div className={style.Item}>
      <h2>{item.item}</h2>
      <h5>You have consume {item.calories} cal today</h5>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          fontWeight: "bold",
          outline: "none",
          border: "none",
          backgroundColor: "#e62f2fe0",
          boxShadow: "2px 2px 8px black",
          cursor: "pointer",
          userSelect: "none",
        }}
        className={style.Button}
        onClick={(e) => {
          setDeleted(!deleted);
        }}
      >
        Delete
      </button>
    </div>
  ) : (
    ""
  );
}

export default Item;
