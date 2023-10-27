import React from "react";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <h1>Notes App</h1>
      </div>
      <div className="navbar__right">
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
};

export default Navbar;
