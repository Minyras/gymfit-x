import "./articleCard.css";
// import article1 from "../../assets/img/article1.jpeg";
import type ArticleProps from "../../models/articleCardProps";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
const ArticleCard = ({ info, date, image }: ArticleProps) => {
  return (
    <div className="article-card">
      <div className="article-top">
        <img src={image} alt="member" />
        <span className="date">{date}</span>
      </div>
      <p>{info}</p>
      <div className="read-more">
        <Link to={"#"}>READ MORE</Link>
        <ChevronRight />
      </div>
    </div>
  );
};

export default ArticleCard;
