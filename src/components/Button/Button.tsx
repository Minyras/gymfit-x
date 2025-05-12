import { useNavigate } from "react-router-dom";
import type ButtonProps from "../../models/ButtonProps";
import "./button.css";

const Button = ({
  name,
  style,
  to,
  onClick,
}: ButtonProps & { onClick?: () => void }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (to) navigate(to);
  };

  return (
    <button onClick={handleClick} className={`${style} button`}>
      {name}
    </button>
  );
};

export default Button;
