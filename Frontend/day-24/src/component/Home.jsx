import React from "react";
import style from "./Style.module.css";
import { ActiveContext } from "./ActiveContext";

function Home() {
  const active = React.useContext(ActiveContext);
  console.log(active);

  return (
    <div className={style.PageContainer}>
      <h3>Home</h3>
      <h6>
        {active.loggedIn
          ? `You can access Profile and Dashboard`
          : `Login to access Profile and Dashboard`}
      </h6>
      <button onClick={() => active.setLoggedIn(!active.loggedIn)}>
        {active.loggedIn ? `Log Out` : ` Log In`}
      </button>
    </div>
  );
}

export default Home;
