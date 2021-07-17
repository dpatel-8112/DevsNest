import React from "react";
import style from "./Items.module.css";

function Item({ item }) {
  console.log(item);
  return (
    <div className={style.Item}>
      <h2>{item.item}</h2>
      <h5>You have consume {item.calories} cal today</h5>
    </div>
  );
}

export default Item;
