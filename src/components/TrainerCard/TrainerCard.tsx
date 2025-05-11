import React from "react";
import "./trainerCard.css";
import type Trainers from "../../models/TrainerCardProps";
import trainer1 from "../../assets/img/trainer1.jpeg";
import { MoveRight, Plus } from "lucide-react";
const TrainerCard = ({ name }: Trainers) => {
  return (
    <div className="trainer-card">
      <div className="trainerImg">
        <img className="trainer-img" src={trainer1} alt="" />
        <button>
          <Plus className="plus-icon" />
          <MoveRight className="moveright-icon" />
        </button>
      </div>
      <div className="trainerInfo">
        <h3>{name}</h3>
        <span>PERSONAL COACH</span>
      </div>
    </div>
  );
};

export default TrainerCard;
