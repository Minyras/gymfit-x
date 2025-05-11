import { NavLink } from "react-router-dom";
import logo from "../../assets/svg/gymfit logo.svg";
import "./footer.css";
import Button from "../Button/Button";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <p className="footer-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse
          arcu vulputate velit scelerisque.
        </p>
      </div>
      <hr />
      <div className="footer-main">
        <div className="footer-menu">
          <span>PAGES</span>
          <div className="footer-nav">
            <ul>
              <NavLink to={"/"}>HOME</NavLink>
              <NavLink to={"/"}>ABOUT</NavLink>
              <NavLink to={"/"}>CLASSES</NavLink>
              <NavLink to={"/"}>SINGLE CLASSES</NavLink>
              <NavLink to={"/"}>BLOG</NavLink>
              <NavLink to={"/"}>BLOG POST</NavLink>
            </ul>
            <ul>
              <NavLink to={"/"}>SHOP</NavLink>
              <NavLink to={"/"}>SINGLE PRODUCT</NavLink>
              <NavLink to={"/"}>PRICING</NavLink>
              <NavLink to={"/"}>TRAINERS</NavLink>
              <NavLink to={"/"}>TRAINER SINGLE</NavLink>
              <NavLink to={"/"}>CONTACT</NavLink>
            </ul>
          </div>
        </div>
        <div className="horizontal"></div>

        <div className="footer-subscription">
          <span>SUBSCRIBE TO OUR NEWSLETTER</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse
            arcu vulputate velit scelerisque.
          </p>
          <div className="footer-form">
            <input type="text" placeholder="WHAT'S YOUR EMAIL" />
            <Button name="SUBSCRIBE" style="footer-btn white" />
          </div>
          <div className="footer-social-media">
            <span>SUBSCRIBE TO OUR NEWSLETTER</span>
            <div className="footer-icons">
              <Facebook />
              <Twitter />
              <Instagram />
              <Linkedin />
              <Youtube />
              <Phone />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>
          Copyright © GymFit X | Designed by BRIX Templates - Powered by Webflow
        </p>
      </div>
    </footer>
  );
};

export default Footer;
