import React from "react";
import logo from "../../assets/logo.jpg";
import flower from "../../assets/flower.jpg";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" className="logo-pic" />
      <img src={flower} alt="" className="flower-pic" />
    </div>
  );
}

export default Header;
