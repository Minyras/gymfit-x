import "./classDetails.css";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchClasses,
  selectClassBySlug,
} from "../../redux/slices/classesSlice";
import type { RootState, AppDispatch } from "../../redux/store";
import {
  Calendar,
  ChartNoAxesColumnIncreasing,
  ChevronRight,
  Clock3,
  Flame,
} from "lucide-react";
import Button from "../Button/Button";
import { FaCirclePlay } from "react-icons/fa6";

const ClassDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.classes.items);
  const navigate = useNavigate();

  const loading = useSelector((state: RootState) => state.classes.loading);
  const error = useSelector((state: RootState) => state.classes.error);
  const cls = useSelector((state: RootState) =>
    slug ? selectClassBySlug(state, slug) : null
  );

  useEffect(() => {
    if (!cls) {
      dispatch(fetchClasses());
    }
  }, [dispatch, cls]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!cls) return <p>Class not found</p>;

  return (
    <div className="class-details">
      <div data-aos="fade-left" className="class-details-card">
        <h3>CLASS DETAILS</h3>
        <p>{cls.description}</p>
        <div className="detail">
          <Clock3 />
          <span>DURATION:</span>
          <span>{cls.duration}</span>
        </div>
        <div className="detail">
          <Flame />
          <span>INTENSITY:</span>
          <span>{cls.intensity}</span>
        </div>
        <div className="detail">
          <ChartNoAxesColumnIncreasing />
          <span>FITNESS LEVEL:</span>
          <span>{cls.level}</span>
        </div>
        <div className="detail">
          <Calendar />
          <span>SCHEDULE:</span>
          <span>{cls.schedule.join(",")}</span>
        </div>
        <hr />
        <div className="instructor">
          <img src={cls.instructor.avatar} alt={cls.instructor.name} />
          <div className="instructor-title">
            <h4>INSTRUCTOR</h4>
            <span>{cls.instructor.name}</span>
          </div>
        </div>
        <Button name="BOOK A CLASS" style="black-button" />
      </div>
      <div className="class-left">
        <div data-aos="zoom-in" className="class-details-title">
          <h1>{cls.title}</h1>
          <p>{cls.longDescription}</p>
        </div>
        <div data-aos="fade-up" className="class-details-yt">
          <div className="img-container">
            <div className="black"></div>
            <img src={cls.image} alt="" />

            <FaCirclePlay />
          </div>
        </div>

        <div data-aos="fade-up" className="class-details-about">
          <h3>ABOUT THE CLASS</h3>
          <p>{cls.longDescription}</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur eveniet esse tempora, laborum qui eum pariatur modi,
            laudantium molestias autem assumenda dolorum? Qui eum sequi eaque
            corrupti sunt officiis adipisci!
          </p>
        </div>
        <hr />
        <div data-aos="fade-up" className="class-details-schedule">
          <h3>CLASS SCHEDULE</h3>
          <p>{cls.longDescription}</p>

          {Object.entries(cls.fullSchedule).map(([day, times]) => (
            <div data-aos="fade-up" key={day} className="schedule-day">
              <h4>{day}</h4>
              <ul>
                {times.map((time, i) => (
                  <li key={i}>{time}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="more-classes">
        <div data-aos="fade-up" className="more-classes-title">
          <h2>More Classes</h2>
          <div>
            <Button name="BROWSE CLASSES" style="black-button" to={"/class"} />
          </div>
        </div>
        <div data-aos="fade-up" className="class-cards">
          {items
            .filter((c) => c.slug !== slug)
            .map((c) => (
              <div
                key={c.id}
                onClick={() => navigate(`/class/${c.slug}`)}
                className="class-card"
              >
                <img src={c.image} alt={c.title} />
                <h3>{c.title}</h3>
                <p>{c.description}</p>
                <div className="class-info">
                  <span>CLASS INFORMATION</span>
                  <ChevronRight />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
