import { useEffect, useRef } from "react";
import "./home.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import type HomeProps from "../../models/HomeProps";
import { Clock3, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

gsap.registerPlugin(ScrollTrigger);
const Home = ({ isActive }: HomeProps) => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.7 },
        {
          scale: 1,
          duration: 2,
          transitionDuration: 3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 0",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    }
  }, [isActive]);
  return (
    <div className="home">
      <div className="home-hero-container">
        <div ref={imageRef} className="background">
          <div className="black"></div>
        </div>
        <div className="home-hero">
          <h1>THE GYM FOR HIGH IMPACT ATHLETES</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            vehicula ut neque leo, posuere purus arcu.
          </p>
          <div className="buttons">
            <Button name={"SUBSCRIBE NOW"} style={"white"} />
            <Button name={"BROWSE CLASSES"} style={"transparent"} />
          </div>
        </div>
      </div>
      <div className="home-info">
        <div className="contact">
          <Mail />
          <div>
            <span>CONTACT</span>
            <ul>
              <li>
                {" "}
                <Link to={"#"}>CONTACT@GYMFIT.COM</Link>
              </li>
              <li>
                <Link to={"#"}>(323) 238 - 0638</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="open-hours">
          <Clock3 />
          <div>
            <span>OPEN HOURS</span>
            <div className="daysOfWeek">
              <ul>
                <li>MONDAY - FRIDAY</li>
                <li>SATURDAY</li>
                <li>SUNDAY</li>
              </ul>
              <ul>
                <li>7:00AM - 10:00PM</li>
                <li>7:00AM - 10:00PM</li>
                <li>7:00AM - 10:00PM</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="location">
          <MapPin />
          <div>
            <span>LOCATION</span>
            <p>6736 S SHERBOURNE DR LOS ANGELES, 90056</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
