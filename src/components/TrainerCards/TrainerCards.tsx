import TrainerCard from "../TrainerCard/TrainerCard";
import "./tainerCards.css";
import trainer1 from "../../assets/img/trainer1.jpeg";
import trainer2 from "../../assets/img/trainer2.jpeg";
import trainer3 from "../../assets/img/trainer3.jpeg";
import trainer4 from "../../assets/img/trainer4.jpeg";
import trainer5 from "../../assets/img/trainer5.jpeg";
import trainer6 from "../../assets/img/trainer6.jpeg";
import type PageProps from "../../models/PageProps";
const TrainerCards = ({ isActive }: PageProps) => {
  return (
    <div>
      {isActive ? (
        <div className="trainers">
          <TrainerCard image={trainer1} name={"JHON CARTER"} />
          <TrainerCard image={trainer2} name={"SOPHIE MOORE"} />
          <TrainerCard image={trainer3} name={"DAN CLARK"} />
        </div>
      ) : (
        <div className="trainers">
          <TrainerCard image={trainer1} name={"JHON CARTER"} />
          <TrainerCard image={trainer2} name={"SOPHIE MOORE"} />
          <TrainerCard image={trainer3} name={"DAN CLARK"} />
          <TrainerCard image={trainer4} name={"KATHIE CORL"} />
          <TrainerCard image={trainer5} name={"AARON WHITE"} />
          <TrainerCard image={trainer6} name={"LILY WOODS"} />
        </div>
      )}
    </div>
  );
};

export default TrainerCards;
