import { LOGO_URL } from "../utils/constants";
import logo from "../assets/logo.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header Render");

  const { loggedinUser } = useContext(UserContext);

  // Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="z-10 bg-white shadow-custom-light">
      <div className="flex items-center justify-between mx-[80px] py-5">
        <div className="w-[200px] mr-5">
          <Link to="/">
            <img className="logo" src={logo} alt="QuickBite Logo" border="0" />
          </Link>
        </div>
        <div className="text-lg">
          <Link to="">Location</Link>
        </div>
        <div className="">
          <ul className="flex gap-[50px] text-lg">
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link to="/cart">Cart ({cartItems.length})</Link>
            </li>
            <div className="flex items-center">
              <button
                className="px-5 rounded-md cursor-pointer outline outline-1"
                onClick={() => {
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login");
                }}
              >
                {btnName}
              </button>
              {btnName === "Logout" && loggedinUser ? (
                <h1 className="font-bold">{loggedinUser}</h1>
              ) : null}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
