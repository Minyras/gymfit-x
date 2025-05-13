import { useState } from "react";
import type FaqProps from "../../models/FaqProps";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./faq.css";
const Faq = ({ title, info }: FaqProps) => {
  const [showFaq, setShowFaq] = useState(false);
  return (
    <div className="faqs" onClick={() => setShowFaq(!showFaq)}>
      <div className="faq-title">
        <h3>{title}</h3>
        {showFaq ? <ChevronUp /> : <ChevronDown />}
      </div>
      {showFaq ? <div className="faq-info">{info}</div> : ""}
      <hr />
    </div>
  );
};

export default Faq;
