import TrainerCard from "../TrainerCard/TrainerCard";
import "./tainerCards.css";
const TrainerCards = () => {
  return (
    <div className="trainers">
      <TrainerCard name={"JHON CARTER"} />
      <TrainerCard name={"SOPHIE MOORE"} />
      <TrainerCard name={"DAN CLARK"} />
    </div>
  );
};

export default TrainerCards;
