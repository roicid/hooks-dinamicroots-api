import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Nav() {
  const NavStyle = {
    color: "white",
  };
  return (
    <nav>
      <h3> Logo </h3>
      <ul className="nav-links">
        <Link style= {NavStyle} to="/about">
          <li>about</li>
        </Link>
        <Link style= {NavStyle} to="/shop">
          <li>shop</li>
        </Link>
      </ul>
    </nav>
  );
}   

export default Nav;
