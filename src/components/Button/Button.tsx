import type ButtonProps from "../../models/ButtonProps";

const Button = ({ name, style }: ButtonProps) => {
  return <button className={`${style}`}>{name}</button>;
};

export default Button;
