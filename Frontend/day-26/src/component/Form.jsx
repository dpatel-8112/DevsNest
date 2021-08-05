import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFirstName } from "../redux/firstName/FirstNameAction";
import { updateLastName } from "../redux/lastName/LastNameAction";

function Form() {
  const firstName = useSelector((state) => state.firstName.firstName);
  const lastName = useSelector((state) => state.lastName.lastName);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => dispatch(updateFirstName(e.target.value))}
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => dispatch(updateLastName(e.target.value))}
      />
      <br />
      <div>First Name : {firstName}</div>
      <div>Last Name : {lastName}</div>
    </div>
  );
}

export default Form;
