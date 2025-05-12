import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { fetchClasses } from "../../redux/slices/classesSlice";
import { Link, useNavigate } from "react-router-dom";
import "./classCard.css";
import { ChevronRight } from "lucide-react";
const ClassCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.classes
  );
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchClasses());
  }, [dispatch]);

  if (loading) return <p>Loading classes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="class-cards">
      {items.map((cls) => (
        <div
          onClick={() => navigate(`/class/${cls.slug}`)}
          data-aos="fade-up"
          className="class-card"
          key={cls.id}
        >
          <img src={cls.image} alt={cls.title} />
          <h3>{cls.title}</h3>
          <p>{cls.description}</p>
          <div className="class-info">
            <Link to={"/src/components/ClassDetails/ClassDetails.tsx"}>
              CLASS INFORMATION
            </Link>
            <ChevronRight />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClassCard;
