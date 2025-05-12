import { Check } from "lucide-react";
import "./packagesCard.css";
import Button from "../Button/Button";
import type PackageCardProps from "../../models/PackageCardProps";
const PackagesCard = ({
  price,
  classCount,
  style,
  btnstyle,
}: PackageCardProps) => {
  return (
    <div className={`packages-card ${style}`}>
      <span>BASIC PLAN</span>
      <div className="package-price">${price} USD</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <hr />
      <ul>
        <li>
          <Check />
          {classCount} CLASSES PER A MONTH
        </li>
        <li>
          <Check />
          24/7 ACCESS TO GYM
        </li>
        <li>
          <Check />
          PERSONAL TRAINER
        </li>
        <li>
          <Check />
          FITNESS COACH
        </li>
      </ul>
      <Button name="SUBSCRIBE NOW" to="#" style={btnstyle} />
    </div>
  );
};

export default PackagesCard;
