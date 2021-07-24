import React, { useState, useEffect } from "react";
import axios from "axios";
import Memes from "./Memes";
import style from "./Style.module.css";

function Home() {
  const [memes, setMemes] = useState([]);
  const [randomId, setRandomId] = useState(0);

  const handleClick = () => {
    const min = 2;
    const max = 99;
    const rand = min + Math.random() * (max - min);
    setRandomId(rand);
  };

  useEffect(() => {
    handleClick();

    axios
      .get("https://api.imgflip.com/get_memes")
      .then((response) => {
        setMemes(response.data.data.memes);
        console.log(memes);
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
            .slice(randomId, randomId + 1)
            .map((item) => {
              return <Memes item={item} />;
            })
        : ""}
    </div>
  );
}

export default Home;
