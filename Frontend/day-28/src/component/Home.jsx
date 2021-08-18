import React, { useEffect, useState } from "react";
import https from "https";
import axios from "axios";

var chunks = [];

function Home() {
  const [assets, setAssets] = useState(null);
  const [option1, setOption1] = useState("Select");
  const [option2, setOption2] = useState("Select");

  const [active, setActive] = useState(null);

  useEffect(() => {
    axios
      .get(
        "http://rest-sandbox.coinapi.io/v1/assets?apikey=712B1681-2520-4461-A856-6F67CED4F57C"
      )
      .then((res) => {
        setAssets(res);
      });
    return () => {};
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://rest-sandbox.coinapi.io/v1/exchangerate/${option1}/${option2}?apikey=712B1681-2520-4461-A856-6F67CED4F57C`
      )
      .then((res) => {
        console.log(res);
        setActive(res);
      });
    return () => {};
  }, [option1, option2]);

  return (
    <div>
      <h3>Home</h3>
      <select value={option1} onChange={(e) => setOption1(e.target.value)}>
        {assets
          ? assets.data
              .slice(0, 100)
              .map((item) => <option value={item.asset_id}>{item.name}</option>)
          : null}
      </select>

      <select value={option2} onChange={(e) => setOption2(e.target.value)}>
        {assets
          ? assets.data
              .slice(0, 100)
              .filter((item) => item.asset_id !== option1)
              .map((item) => <option value={item.asset_id}>{item.name}</option>)
          : null}
      </select>
      <div>{active ? <div>{active.data.rate}</div> : null}</div>
    </div>
  );
}

export default Home;
