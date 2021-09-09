import React from "react";
import logo from "../assets/image/header-logo.png";

interface Props {}

const Story = (props: Props) => {
  return (
    <div className="Story_Container">
      <div className="Image_Wrapper2">
        <img src={logo} alt="" />
      </div>
      <div className="Story_User">_unknown_</div>
    </div>
  );
};

export default Story;
