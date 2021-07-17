import React, { useState } from "react";
import Item from "./Item";

function Items({ setCalArrayHandler }) {
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("");

  const foodHandler = (e) => {
    setFood(e.target.value);
  };

  const caloriesHandler = (e) => {
    setCalories(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setCalArrayHandler({ newFood: food, newCal: calories, deleted: false });
    setFood("");
    setCalories("");
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={submitHandler}
      >
        <div>
          <input
            style={{
              padding: "8px 15px",
              fontSize: "20px",
              outline: "none",
              border: "none",
              boxShadow: "2px 2px 8px black",
              fontFamily: "monospace",
              margin: "2px",
            }}
            value={food}
            type="text"
            onChange={foodHandler}
            placeholder="Enter Food"
          />
          <input
            style={{
              padding: "8px 15px",
              fontSize: "20px",
              outline: "none",
              border: "none",
              boxShadow: "2px 2px 8px black",
              margin: "2px",
              fontFamily: "monospace",
            }}
            value={calories}
            type="text"
            onChange={caloriesHandler}
            placeholder="Enter Calories"
            type="number"
          />
        </div>
        <button
          style={{
            outline: "none",
            border: "none",
            height: "35px",
            margin: "10px 2px",
            boxShadow: "4px 4px 10px black",
            cursor: "pointer",
          }}
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Items;
