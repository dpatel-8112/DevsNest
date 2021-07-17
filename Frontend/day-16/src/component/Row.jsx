import React from "react";
import style from "./Board.module.css";
import Box from "./Box";

function Row() {
  return (
    <div className={style.BoxContainer}>
      <Box variant={"black"} />
      <Box variant={"white"} />
      <Box variant={"black"} />
      <Box variant={"white"} />
      <Box variant={"black"} />
      <Box variant={"white"} />
      <Box variant={"black"} />
      <Box variant={"white"} />
    </div>
  );
}

export default Row;
