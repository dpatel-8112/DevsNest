import React, { useState, useEffect } from "react";
import axios from "axios";
import Memes from "./Memes";
import style from "./Style.module.css";

function Home() {
  const [memes, setMemes] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((response) => {
        setMemes(response.data.data.memes);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {};
  }, []);

  return (
    <div className={style.HomeContainer}>
      {memes
        ? memes
            .filter((item) => {
              if (item.height <= 600) {
                return item;
              }
              return item;
            })
            .map((item) => {
              return <Memes item={item} />;
            })
        : ""}
    </div>
  );
}

export default Home;
