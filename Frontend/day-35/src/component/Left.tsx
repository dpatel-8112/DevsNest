import React from "react";
import Posts from "./Posts";

interface Props {}

const Left = (props: Props) => {
  return (
    <div className="Left_Container">
      <Posts />
    </div>
  );
};

export default Left;
