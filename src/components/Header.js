import { LOGO_URL } from "../utils/constants";
import logo from "../assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header Render");

  return (
    <div className="header">
      <div className="logo-container">
        <a href="">
          <img className="logo" src={logo} alt="QuickBite Logo" border="0" />
        </a>
      </div>
      <div className="location">
        <a href="">Location</a>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="">Search</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Cart</a>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
