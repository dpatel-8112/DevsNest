import React, { useContext } from "react";
import { ActiveContext } from "./ActiveContext";
import style from "./Style.module.css";

function Memes({ item }) {
  const { setActiveHandler, active, setActiveHomeHandler } =
    useContext(ActiveContext);
  const clickImageHandler = () => {
    setActiveHandler(item);
    setActiveHomeHandler(false);
  };
  return (
    <div className={style.MemesConstainer} onClick={clickImageHandler}>
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
