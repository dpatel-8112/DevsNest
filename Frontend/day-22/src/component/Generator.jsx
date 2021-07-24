import React, { useState, useEffect, useContext } from "react";
import { ActiveContext } from "./ActiveContext";
import axios from "axios";
import style from "./Style.module.css";

function Generator() {
  const [text, setText] = useState([]);
  const [activeURL, setActiveURL] = useState("");

  const [generate, setGenerate] = useState(false);

  const { setActiveHandler, active, setActiveHomeHandler } =
    useContext(ActiveContext);

  useEffect(() => {
    setActiveURL(active.url);
    return () => {
      setActiveURL(active.url);
    };
  }, []);

  useEffect(() => {
    let url = `https://api.imgflip.com/caption_image?template_id=${active.id}&username=DevarshiPatel&password=Abcd123@`;

    text.map((value, index) => {
      url += `&boxes[${index}][text] = ${value}`;
    });

    axios
      .get(url)
      .then((res) => {
        setActiveURL(res.data.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, [generate]);

  return (
    <div className={style.GContainer}>
      <div>
        <img src={activeURL ? activeURL : ""} width="400px" alt="" />
      </div>
      <div>
        <div className={style.InputContainer}>
          {[...Array(active.box_count)].map((_, index) => {
            return (
              <input
                className={style.Input}
                type="text"
                placeholder={`Text ${index}`}
                onChange={(e) => {
                  const newText = [...text];
                  newText[index] = e.target.value;
                  setText(newText);
                }}
              />
            );
          })}
        </div>

        <div>
          <button
            className={style.Button}
            onClick={() => setActiveHomeHandler(true)}
          >
            Choose Template
          </button>
          <button
            className={style.Button}
            onClick={() => setGenerate(!generate)}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Generator;
