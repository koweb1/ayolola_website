import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./footeraccordion.css";

interface FooterAccordionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function FooterAccordion({
  title,
  icon,
  children,
}: FooterAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="footer-accordion">
      <button
        className="footer-accordion-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="footer-accordion-title">
          <span className="footer-accordion-icon">{icon}</span>
          <span>{title}</span>
        </div>
        <FiChevronDown
          size={20}
          className={`footer-accordion-chevron ${isOpen ? "open" : ""}`}
        />
      </button>

      <div className={`footer-accordion-body ${isOpen ? "open" : ""}`}>
        <div className="footer-accordion-content">{children}</div>
      </div>
    </div>
  );
}
