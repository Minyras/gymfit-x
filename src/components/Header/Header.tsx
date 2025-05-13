import { ShoppingBag } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../assets/svg/gymfit logo.svg";
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { closeCart, toggleCart } from "../../redux/slices/cartSlice";

const Header = () => {
  const showCart = useSelector((state: RootState) => state.cart.showCart);
  const dispatch = useDispatch<AppDispatch>();
  const cartCount = useSelector((state: RootState) => state.cart.items.length);

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/class"
          >
            Classes
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/shop"
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/contact"
          >
            Contact Us
          </NavLink>
        </ul>
      </nav>
      <div onClick={() => dispatch(toggleCart())} className="shoppingBag">
        <ShoppingBag />
        <span className="count">{cartCount}</span>
      </div>

      {showCart && (
        <>
          <div
            className="cart-overlay"
            onClick={() => dispatch(closeCart())}
          ></div>
          <Cart
            onClose={() => dispatch(closeCart())}
            className={showCart ? "show" : ""}
          />
        </>
      )}
    </div>
  );
};

export default Header;
