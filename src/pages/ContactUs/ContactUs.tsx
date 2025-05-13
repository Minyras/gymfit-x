import "./contactUs.css";
import contactUsSvg from "../../assets/svg/contact svg.svg";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import faqSvg from "../../assets/svg/faq svg.svg";
import Faq from "../../components/Faq/Faq";
const ContactUs = () => {
  return (
    <div className="contactUs">
      <form className="contactUs-form">
        <div className="contactUs-form-top">
          <div className="contact-info">
            <img src={contactUsSvg} alt="" />
            <h3>GET IN TOUCH</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac,
              sagittis amet augue tincidunt nam consequat. In sagittis curabitur
              tortor nunc.
            </p>
            <ul>
              <li>
                <Mail />
                <Link to={"#"}>CONTACT@GYMFITX.COM</Link>
              </li>
              <li>
                <Phone />
                <Link to={"#"}>(323) 238 - 0638</Link>
              </li>
              <li>
                <MapPin />
                <Link to={"#"}>6736 S SHERBOURNE DR LOS ANGELES, 90056</Link>
              </li>
            </ul>
          </div>
          <div className="form">
            <div className="inputs">
              <input type="text" placeholder="WHAT'S YOUR NAME?" />
              <input type="mail" placeholder="WHAT'S YOUR EMAIL?" />
              <input type="phone" placeholder="WHAT'S YOUR PHONE?" />
              <input type="text" placeholder="SUBJECT" />
            </div>
            <textarea
              name="message"
              id="message"
              placeholder=" WRITE YOUR MASSAGE HERE"
            ></textarea>
          </div>
        </div>
        <Button name="SEND MESSAGE" style="black-button" to="#" />
      </form>
      <section className="faq-container">
        <div className="faqs-title">
          <img src={faqSvg} alt="" />
          <h3>FREQUENTLY ASKED QUESTIONS</h3>
        </div>
        <Faq
          title="WHAT IS THE GYMFIT X SCHEDULE?"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet consectetur tellus faucibus tincidunt. Varius fermentum tincidunt aenean purus donec vitae tempus porta tempor."
        />
        <Faq
          title="DO YOU OFFER A TRIAL DAY FOR THE GYMFIT X?"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet consectetur tellus faucibus tincidunt. Varius fermentum tincidunt aenean purus donec vitae tempus porta tempor."
        />
        <Faq
          title="HOW LONG ARE THE CLASSES DURATION?"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet consectetur tellus faucibus tincidunt. Varius fermentum tincidunt aenean purus donec vitae tempus porta tempor."
        />
        <Faq
          title="DO YOU OFFER 1-ON-1 CLASSES AND PERSONAL TRAINING?"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet consectetur tellus faucibus tincidunt. Varius fermentum tincidunt aenean purus donec vitae tempus porta tempor."
        />
        <Faq
          title="WHAT IS THE MONTHLY SUBSCRIPTION FOR THE GYMFIT?"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet consectetur tellus faucibus tincidunt. Varius fermentum tincidunt aenean purus donec vitae tempus porta tempor."
        />
      </section>
    </div>
  );
};

export default ContactUs;
