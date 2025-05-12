import { Flame, Heart, TrendingUp, Users } from "lucide-react";
import AboutValuesCard from "../AboutValuesCard/AboutValuesCard";
import "./aboutValues.css";
const AboutValues = () => {
  return (
    <div className="values-container">
      <AboutValuesCard
        svg={<Flame strokeWidth={1} size={100} />}
        value="PASSION"
        info="Lorem ipsum dolor sit amet, consectetur adipiscingol elit. adipiscing amet, aliquet orci tellus lorem ip."
      />
      <AboutValuesCard
        svg={<Users strokeWidth={1} size={100} />}
        value="COMMUNITY"
        info="Lorem ipsum dolor sit amet, consectetur adipiscingol elit. adipiscing amet, aliquet orci tellus lorem ip."
      />
      <AboutValuesCard
        svg={<Heart strokeWidth={1} size={100} />}
        value="COMMITMENT"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing amet, aliquet orci tellus lorem ip."
      />
      <AboutValuesCard
        svg={<TrendingUp strokeWidth={1} size={100} />}
        value="GROWTH"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing amet, aliquet orci tellus lorem ip."
      />
    </div>
  );
};

export default AboutValues;
