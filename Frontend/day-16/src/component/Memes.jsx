import React, { useContext } from "react";

import style from "./Style.module.css";

function Memes({ item }) {
  return (
    <div className={style.MemesConstainer}>
      <span>{item.name}</span>
      <img
        src={item.url}
        width="500px"
        height="500"
        alt=""
        style={{ cursor: "pointer", padding: "10px" }}
      />
    </div>
  );
}

export default Memes;
