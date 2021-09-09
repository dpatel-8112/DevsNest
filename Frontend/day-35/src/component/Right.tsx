import React, { ReactElement, useState } from "react";
import logo from "../assets/image/header-logo.png";
interface Props {}

function Right({}: Props): ReactElement {
  return (
    <div className="Right_Container">
      <div className="Profile_Wrapper">
        <div className="User_Image">
          <img src={logo} alt="" />
        </div>
        <div className="User_Info">
          <div className="User_Username">_unknow_</div>
          <div className="User_Name">Unknown Singh</div>
        </div>
        <div className="Action">
          <button>Switch</button>
        </div>
      </div>
      <br />
      <div>Suggestions For You</div>
      <div className="Profile_Wrapper">
        <div className="User_Image">
          <img src={logo} alt="" />
        </div>
        <div className="User_Info">
          <div className="User_Username">_unknow_</div>
          <div className="User_Name">Unknown Singh</div>
        </div>

        <div className="Action">
          <button>Switch</button>
        </div>
      </div>
    </div>
  );
}

export default Right;
