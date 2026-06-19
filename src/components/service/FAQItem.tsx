import "./faqitem.css";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{question}</span>

        {open ? <FiMinus size={20} /> : <FiPlus size={20} />}
      </button>

      {open && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
