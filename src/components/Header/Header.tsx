import { ShoppingBag } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../assets/svg/gymfit logo.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/class"}
          >
            Classes
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/shop"}
          >
            Shop
          </NavLink>
        </ul>
      </nav>
      <div className="shoppingBag">
        <ShoppingBag />
        <span className="count">0</span>
      </div>
    </div>
  );
};

export default Header;
