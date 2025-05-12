import ArticleCard from "../ArticleCard/ArticleCard";
import "./articleCards.css";
import article1 from "../../assets/img/article1.jpeg";
import article2 from "../../assets/img/article2.jpeg";
import article3 from "../../assets/img/article3.jpeg";

const ArticleCards = () => {
  return (
    <div className="article-cards">
      <ArticleCard
        info={"5 Tips to build a daily movement routine"}
        date={"27 july"}
        image={article1}
      />
      <ArticleCard
        info={"The beginner’s guide to weight lifting"}
        date={"29 july"}
        image={article2}
      />
      <ArticleCard
        info={"Why breathwork matters in your workout"}
        date={"27 july"}
        image={article3}
      />
    </div>
  );
};

export default ArticleCards;
