import { LOGO_URL } from "../utils/constants";
import {useState} from "react"

const Header = () => {

const [btnName, setBtnName] = useState(false)
console.log("render")

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
        <button className="login-btn" onClick={() => {
          setBtnName(prev => !prev)
        }}>{btnName ? "Login" : "Logout"}</button>
      </div>
    </div>
  );
};

export default Header