import React, { useState } from "react";

function Item({ item }) {
  console.log(item);
  const [deleted, setDeleted] = useState(true);

  console.log(item);
  return deleted ? (
    <div>
      <h2>
        <input
          type="text"
          value={item.newFood}
          style={{
            outline: "none",
            backgroundColor: "transparent",
            border: "none",
            color: "white",
            fontSize: "28px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        />
      </h2>
      <h5>
        You have consume{" "}
        <input
          type="text"
          value={item.newCal}
          style={{
            outline: "none",
            width: "50px",
            backgroundColor: "transparent",
            border: "none",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        />{" "}
        cal today
      </h5>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          fontWeight: "bold",
          outline: "none",
          border: "none",
          backgroundColor: "#e62f2fe0",
          boxShadow: "2px 2px 8px black",
          cursor: "pointer",
          userSelect: "none",
        }}
        onClick={(e) => {
          setDeleted(!deleted);
        }}
      >
        Delete
      </button>
    </div>
  ) : (
    ""
  );
}

export default Item;
