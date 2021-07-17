import React, { useState } from "react";
import Item from "./Item";
import Items from "./Items";

function Home() {
  const [calArray, setCalArray] = useState([]);

  const setCalArrayHandler = (newState) => {
    setCalArray([...calArray, newState]);
  };

  const deleteHandler = (newState) => {};

  return (
    <div style={{ margin: "20px 0px" }}>
      <Items setCalArrayHandler={setCalArrayHandler} />
      {calArray.map((item) => {
        return <Item item={item} />;
      })}
    </div>
  );
}

export default Home;
