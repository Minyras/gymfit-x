import type ButtonProps from "../../models/ButtonProps";
import "./button.css";
const Button = ({ name, style }: ButtonProps) => {
  return <button className={`${style} button`}>{name}</button>;
};

export default Button;
