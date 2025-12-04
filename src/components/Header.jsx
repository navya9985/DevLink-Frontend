import { useState } from "react";
import devlink from "../assets/devlink.png"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="header">

      {/* LOGO + NAME */}
      <div className="left">
        <img src={devlink} alt="logo" className="logo" />
        <h2 className="name">DevLink</h2>
      </div>

      {/* DESKTOP LINKS */}
      <nav className="links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* DESKTOP LOGIN */}
      <div className="buttons">
        <Link to="/login">
          <button className="login">Login</button>
        </Link>
      </div>

      {/* MOBILE HAMBURGER */}
      <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
        ☰
      </div>

      {/* MOBILE MENU */}
      {openMenu && (
        <div className="mobile-menu">
          <a href="#home" onClick={() => setOpenMenu(false)}>Home</a>
          <a href="#services" onClick={() => setOpenMenu(false)}>Services</a>
          <a href="#about" onClick={() => setOpenMenu(false)}>About</a>
          <a href="#contact" onClick={() => setOpenMenu(false)}>Contact</a>

          <Link to="/login">
            <button className="login" onClick={() => setOpenMenu(false)}>Login</button>
          </Link>
        </div>
      )}

    </header>
  );
};

export default Header;
