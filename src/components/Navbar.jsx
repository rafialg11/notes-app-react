import React from "react";
import "../style/Navbar.css";
import { FiSearch } from "react-icons/fi";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <h1>Notes App</h1>
      </div>
      <div className="navbar__right">
        <input type="text" placeholder="Search" />
        <Button text="Cari" icon={FiSearch} />
      </div>
    </nav>
  );
};

export default Navbar;
