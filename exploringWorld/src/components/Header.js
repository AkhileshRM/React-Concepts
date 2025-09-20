import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState(false);
  console.log("render");

  useEffect(() => {
    console.log("Om namo bhagavate vasudevaya namaha");
  }, [btnName]);

  const status = useOnlineStatus();

  return (
    <div className="header flex justify-between items-center bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="logo w-44" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-xl">Online Status: {status ? "✅" : "🔴"}</li>
          <li className="px-4 text-xl">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </li>
          <li className="px-4 text-xl">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About Us
            </Link>
          </li>
          <li className="px-4 text-xl">
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact Us
            </Link>
          </li>
          <li className="px-4 text-xl">
            <Link
              to="/grocery"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Grocery
            </Link>
          </li>
          <li className="px-4 text-xl">Cart</li>
          <li className="px-4 text-xl">
            <Link to="/login">
              <button
                className="login-btn px-4 py-1 bg-slate-800 text-white rounded-lg text-base"
                onClick={() => {
                  setBtnName((prev) => !prev);
                }}
              >
                {btnName ? "Logout" : "Login"}
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
