import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus"

const Header = () => {
  const [btnName, setBtnName] = useState(false);
  console.log("render");

  useEffect(() => {
    console.log("Om namo bhagavate vasudevaya namaha");
  }, [btnName]);

  const status = useOnlineStatus()

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status: {status ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" style={{ textDecoration: "none", color: "inherit" }}>Grocery</Link>
          </li>
          <li>Cart</li>
        </ul>
        <Link to="/login">
          <button
            className="login-btn"
            onClick={() => {
              setBtnName((prev) => !prev);
            }}
          >
            {btnName ? "Logout" : "Login"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
