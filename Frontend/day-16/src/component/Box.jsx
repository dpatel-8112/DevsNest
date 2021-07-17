import React from "react";
import style from "./Board.module.css";

function Box({ variant }) {
  const box = {
    height: "50px",
    width: "50px",
    backgroundColor: "black",
  };

  return (
    <div>
      <div
        className={style.box}
        style={{
          backgroundColor: variant,
        }}
      ></div>
    </div>
  );
}

export default Box;
