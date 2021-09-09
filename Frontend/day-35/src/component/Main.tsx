import React from "react";
import Left from "./Left";
import Posts from "./Posts";
import Right from "./Right";
import "../style/Main.scss";

interface Props {}

const Main = (props: Props) => {
  return (
    <div className="Main_Container">
      <Left />
      <Right />
    </div>
  );
};

export default Main;
