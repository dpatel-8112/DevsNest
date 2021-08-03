import React from "react";
import { Link } from "react-router-dom";
import style from "./Style.module.css";

function NavBar() {
  return (
    <div className={style.Container}>
      <div className={style.NavbarWrapper}>
        <Link to="/home">
          <div className={style.NavbarItem}>Home</div>
        </Link>
        <Link to="/about">
          <div className={style.NavbarItem}>About</div>
        </Link>
        <Link to="/profile">
          <div className={style.NavbarItem}>Profile</div>
        </Link>
        <Link to="/dashboard">
          <div className={style.NavbarItem}>Dashboard</div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
