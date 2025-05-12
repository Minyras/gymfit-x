import { useEffect, useRef } from "react";
import type PageProps from "../../models/PageProps";
import "./about.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import storySvg from "../../assets/svg/story svg.svg";
import storyImg from "../../assets/img/story img.jpeg";
import facilitiesSvg from "../../assets/svg/facilities svg.svg";
import facilitiesImg from "../../assets/img/facilities yt img.jpeg";
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AboutValues from "../../components/AboutValues/AboutValues";
import valuesSvg from "../../assets/svg/values svg.svg";
gsap.registerPlugin(ScrollTrigger);
const About = ({ isActive }: PageProps) => {
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
    <div className="about">
      <section className="about-hero-container">
        <div ref={imageRef} className="background">
          <div className="black"></div>
        </div>
        <section className="about-hero">
          <h1 data-aos="zoom-in">ABOUT OUR GYM</h1>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            dignissim vulputate pellentesque id consequat fringilla non
            ultrices. Dignissim urna, morbi a, phasellus imperdiet urna at et.
            Lectus malesuada feugiat ornare erat sit.
          </p>
        </section>
      </section>
      <section className="about-story">
        <div className="story-content">
          <img className="storySvg" src={storySvg} alt="" />
          <h2>THE STORY BEHIND OUR GYM</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
            sociis morbi sed sagittis consectetur in quisque placerat enim.
            Vitae, lacus eros egestas suspendisse natoque consequat. Tellus enim
            eros diam sit leo blandit libero ut morbi. Convallis iaculis nam.
          </p>
        </div>
        <img src={storyImg} alt="" />
      </section>
      <section className="facilities">
        <div className="facilities-title">
          <img src={facilitiesSvg} alt="" />
          <h2>OUR FACILITIES</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sagittis, diam netus vel eget scelerisque nibh justo, vestibulum.
            Velit senectus.
          </p>
        </div>
        <div className="facilities-yt">
          <div className="black"></div>
          <div className="white-bg"></div>
          <div className="black-bg"></div>
          <Link
            className="play-link"
            to={"https://www.youtube.com/watch?v=tUykoP30Gb0"}
          >
            <FaCirclePlay />
          </Link>
          <div className="img-wrapper">
            <img className="yt-img" src={facilitiesImg} alt="" />
          </div>
        </div>
      </section>
      <section className="about-values">
        <div className="values-title">
          <img src={valuesSvg} alt="" />
          <h2>THE CORE VALUES WE BELIEVE IN</h2>
        </div>
        <AboutValues />
      </section>
    </div>
  );
};

export default About;
