import React from "react";

function Card({ item }) {
  return (
    <div>
      <h2>{item.newFood}</h2>
      <h5>{item.newCal}</h5>
      <div>
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
}

export default Card;
