import { useEffect, useRef } from "react";
import "./home.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import type PageProps from "../../models/PageProps";
import { Clock3, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import aboutUs from "../../assets/svg/about us.svg";
import homeGirl from "../../assets/img/homegirl.jpeg";
import homeBoy from "../../assets/img/homeboy.jpeg";
import classesSvg from "../../assets/svg/classes.svg";
import ytBg from "../../assets/img/yt-bg.jpeg";
import { FaCirclePlay } from "react-icons/fa6";
import trainerSVg from "../../assets/svg/trainer svg.svg";
import TrainerCards from "../../components/TrainerCards/TrainerCards";
import blogSvg from "../../assets/svg/blog svg.svg";
import ArticleCards from "../../components/ArticleCards/ArticleCards";
gsap.registerPlugin(ScrollTrigger);
const Home = ({ isActive }: PageProps) => {
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
      <section className="home-hero-container">
        <div ref={imageRef} className="background">
          <div className="black"></div>
        </div>
        <div data-aos="zoom-in" className="home-hero">
          <h1>THE GYM FOR HIGH IMPACT ATHLETES</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            vehicula ut neque leo, posuere purus arcu.
          </p>
          <div className="buttons">
            <Button name={"SUBSCRIBE NOW"} style={"white"} to="/subscribe" />
            <Button name={"BROWSE CLASSES"} style={"transparent"} to="/class" />
          </div>
        </div>
      </section>
      <section className="home-info">
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
      </section>
      <section data-aos="fade-up" className="home-about">
        <img src={aboutUs} alt="about us" />

        <h1>WE ARE NOT JUST A GYM, WE ARE A WHOLE COMMUNITY</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
          sagittis, diam netus vel eget scelerisque nibh justo, vestibulum.
          Velit senectus.
        </p>
        <div className="buttons">
          <Button
            name={"SUBSCRIBE NOW"}
            style={"black-button"}
            to="/subscribe"
          />
          <Button
            name={"BROWSE CLASSES"}
            style={"white-transparent"}
            to="/class"
          />
        </div>
      </section>
      <section data-aos="fade-up" className="classes-img">
        <div className="white-bg"></div>
        <div className="black-bg"></div>
        <div className="images">
          <img src={homeBoy} alt="" />
          <img className="home-girl" src={homeGirl} alt="" />
        </div>
      </section>
      <section className="home-classes">
        <div data-aos="fade-up" className="classes-title">
          <img className="classes-svg" src={classesSvg} alt="" />
          <h2>DISCOVER ALL OUR CLASSES</h2>
        </div>
        <div className="carousel-container">
          <Button name={"BROWSE ALL CLASSES"} style={"white"} to="/class" />
        </div>
      </section>
      <section className="yt">
        <img src={ytBg} alt="" />
        <div className="yt-info black">
          <div data-aos="fade-up" className="yt-title">
            <h2>DISCOVER WHAT MAKES OUR GYM DIFFERENT</h2>
            <Button name="SUBSCRIBE NOW" style="white" to="/subscribe" />
          </div>
          <Link
            data-aos="fade-up"
            to={"https://www.youtube.com/watch?v=tUykoP30Gb0"}
          >
            <FaCirclePlay />
          </Link>
        </div>
      </section>
      <section className="home-team">
        <div data-aos="fade-up" className="team-title">
          <img className="trainer-svg" src={trainerSVg} alt="trainers" />
          <h2>
            OUR TEAM OF <br /> PERSONAL TRAINERS
          </h2>
        </div>
        <TrainerCards data-aos="fade-up" isActive={true} />
        <Button name="BROWSE TRAINERS" style="black-button" to="/trainers" />
      </section>
      <section className="home-blog">
        <div data-aos="fade-up" className="blog-title">
          <img src={blogSvg} alt="" />
          <h2>ARTICLES & NEWS</h2>
        </div>
        <ArticleCards data-aos="fade-up" />
      </section>
    </div>
  );
};

export default Home;
