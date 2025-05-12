import TrainerCard from "../TrainerCard/TrainerCard";
import "./tainerCards.css";
import trainer1 from "../../assets/img/trainer1.jpeg";
import trainer2 from "../../assets/img/trainer2.jpeg";
import trainer3 from "../../assets/img/trainer3.jpeg";
const TrainerCards = () => {
  return (
    <div className="trainers">
      <TrainerCard image={trainer1} name={"JHON CARTER"} />
      <TrainerCard image={trainer2} name={"SOPHIE MOORE"} />
      <TrainerCard image={trainer3} name={"DAN CLARK"} />
    </div>
  );
};

export default TrainerCards;
