import { useState } from "react";
import devlink from "../assets/devlink.png"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((store) => store.user);

  return (
    <header className="header">

      <div className="left">
        <img
          src={devlink}
          alt="logo"
          className="logo"
        />
        <h2 className="name">DevLink</h2>
      </div>

      <nav className="links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>


      
      <div className="buttons">
      <Link to="/login">
  <button className="login">Login</button>
</Link>

      </div>


      <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
     
        ☰
      </div>

      {showMenu && (
        <div className="mobile-menu">
          <a href="#home" onClick={() => setShowMenu(false)}>Home</a>
          <a href="#services" onClick={() => setShowMenu(false)}>Services</a>
          <a href="#about" onClick={() => setShowMenu(false)}>About</a>
          <a href="#contact" onClick={() => setShowMenu(false)}>Contact</a>

          &nbsp;
        <Link to="/login">
  <button className="login" >Login</button>
</Link>

        </div>
      )}

    </header>
  );
};

export default Header;
