import React from "react";
import style from "./Board.module.css";
import Box from "./Box";

function Row2() {
  return (
    <div className={style.BoxContainer}>
      <Box variant={"white"} />
      <Box variant={"black"} />
      <Box variant={"white"} />
      <Box variant={"black"} />
      <Box variant={"white"} />
      <Box variant={"black"} />
      <Box variant={"white"} />
      <Box variant={"black"} />
    </div>
  );
}

export default Row2;
