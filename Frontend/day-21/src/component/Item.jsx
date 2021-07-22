import React, { useState, useEffect } from "react";

function Item({ item, editHandler, setEdited }) {
  console.log(item);
  const [wantToDelete, setWantToDelete] = useState(false);
  const [wantToEdit, setWantToEdit] = useState(false);
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  const submitHandler = (e) => {
    setWantToDelete(false);
  };

  console.log(food + " " + calories);

  useEffect(() => {
    setFood(item.newFood);
    setCalories(item.newCal);

    console.log(food + " " + calories);
    return () => {};
  }, []);

  console.log(item);
  return food ? (
    wantToDelete == false ? (
      <div>
        <form onSubmit={formSubmitHandler}>
          <h2>
            <input
              type="text"
              value={food}
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
              value={calories}
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
              setWantToDelete(true);
              setWantToEdit(false);
            }}
          >
            Delete
          </button>
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
            onClick={() => {
              setWantToEdit(true);
              setWantToDelete(!wantToDelete);
            }}
          >
            Edit
          </button>
        </form>
      </div>
    ) : wantToEdit ? (
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
            onChange={(e) => setFood(e.target.value)}
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
            onChange={(e) => setCalories(e.target.value)}
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
    ) : (
      ""
    )
  ) : (
    "Something goes wrong!"
  );
}

export default Item;
