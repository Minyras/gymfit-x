import "./subscribe.css";
import packagesSvg from "../../assets/svg/pavkages svg.svg";
import PackagesCard from "../PackagesCard/PackagesCard";
const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe-title">
        <img src={packagesSvg} alt="" />
        <h1>SUBSCRIBE TO OUR GYM</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="package-cards">
        <PackagesCard price={99} classCount={4} style btnstyle="black-button" />
        <PackagesCard
          price={199}
          classCount={12}
          style={"black-package"}
          btnstyle="white"
        />
        <PackagesCard
          price={399}
          classCount={30}
          style
          btnstyle="black-button"
        />
      </div>
    </div>
  );
};

export default Subscribe;
