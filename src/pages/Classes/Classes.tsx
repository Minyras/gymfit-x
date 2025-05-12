import { useEffect, useRef } from "react";
import "./classes.css";
import type PageProps from "../../models/PageProps";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ClassCard from "../../components/ClassCard/ClassCard";
gsap.registerPlugin(ScrollTrigger);
const Classes = ({ isActive }: PageProps) => {
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
    <div className="classes">
      <section className="classes-hero-container">
        <div ref={imageRef} className="background">
          <div className="black"></div>
        </div>
        <section className="classes-hero">
          <h1 data-aos="zoom-in">CLASSES</h1>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            vehicula ut neque leo, posuere purus arcu.
          </p>
        </section>
      </section>
      <ClassCard />
    </div>
  );
};

export default Classes;
