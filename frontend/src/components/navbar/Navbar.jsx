import React from "react";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.jpg";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#mission">Our Mission</a>
    </p>
    <p>
      <a href="#community">Community</a>
    </p>
    <p>
      <a href="#contact">Contact Us</a>
    </p>
    <p>
      <a href="#support">Support Us</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="temple__navbar">
      <div className="temple__navbar-links">
        <div className="temple__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="temple__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="temple__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="temple__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="temple__navbar-menu_container scale-up-center">
            <div className="temple__navbar-menu_container-links">
              <Menu />
              <div className="temple__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
