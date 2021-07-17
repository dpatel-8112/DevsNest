import React, { useState } from "react";
import Item from "./Item";
import FoodItems from "./Items.json";
import style from "./Items.module.css";

function Items() {
  return (
    <div className={style.Container}>
      {FoodItems.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}

export default Items;
