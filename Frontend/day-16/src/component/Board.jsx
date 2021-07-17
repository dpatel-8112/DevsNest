import React from "react";
import style from "./Board.module.css";
import Row from "./Row";
import Row2 from "./Row2";

function Board() {
  return (
    <div className={style.Container}>
      <div className={style.Row}>
        <Row />
        <Row2 />
        <Row />
        <Row2 />
        <Row />
        <Row2 />
        <Row />
        <Row2 />
      </div>
    </div>
  );
}

export default Board;
