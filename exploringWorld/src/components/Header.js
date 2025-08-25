import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState(false);
  console.log("render");

  useEffect(() => {
    console.log("Om namo bhagavate vasudevaya namaha");
  }, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" style={{textDecoration: "none", color:"inherit"}}>Home</Link>
          </li>
          <li>
            <Link to="/about" style={{textDecoration: "none", color:"inherit"}}>About Us</Link>
          </li>
          <li>
            <Link to="/contact" style={{textDecoration: "none", color:"inherit"}}>Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
        <button
          className="login-btn"
          onClick={() => {
            setBtnName((prev) => !prev);
          }}
        >
          {btnName ? "Login" : "Logout"}
        </button>
      </div>
    </div>
  );
};

export default Header;
