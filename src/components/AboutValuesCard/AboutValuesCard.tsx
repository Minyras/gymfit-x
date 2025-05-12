import type ValuesCardProps from "../../models/ValuesCardProps";
import "./aboutValuesCard.css";
const AboutValuesCard = ({ svg, value, info }: ValuesCardProps) => {
  return (
    <div className="values-card">
      <div className="values-svg"> {svg}</div>
      <h3>{value}</h3>
      <p>{info}</p>
    </div>
  );
};

export default AboutValuesCard;
