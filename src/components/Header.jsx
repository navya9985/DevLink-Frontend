import { useState } from "react";
import devlink from "../assets/devlink.png"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  return (
    <header className="header">

      {/* LOGO + NAME */}
      <div className="left">
        <img src={devlink} className="logo" alt="logo" />
        <h2 className="name">DevLink</h2>
      </div>

      {/* NAV LINKS */}
      <nav className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* LOGIN BUTTON */}
      <div className="buttons">
        <Link to="/login">
          <button className="login">Login</button>
        </Link>
      </div>

    </header>
  );
};

export default Header;


