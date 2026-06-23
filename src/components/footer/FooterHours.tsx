import { FiClock } from "react-icons/fi";
import FooterAccordion from "./FooterAccordion";
import "./footerhours.css";

export default function FooterHours() {
  const hours = [
    { day: "Mon - Fri:", time: "8:00 AM - 6:00 PM", closed: false },
    { day: "Saturday:", time: "8:00 AM - 4:00 PM", closed: false },
    { day: "Sunday:", time: "Closed", closed: true },
  ];

  const HoursList = () => (
    <ul className="footer-hours-list">
      {hours.map((item) => (
        <li key={item.day} className="footer-hours-item">
          <span className="footer-hours-day">{item.day}</span>
          <span className={`footer-hours-time ${item.closed ? "closed" : ""}`}>
            {item.time}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop */}
      <div className="footer-hours-desktop">
        <h4 className="footer-col-title">Business Hours</h4>
        <HoursList />
      </div>

      {/* Mobile */}
      <div className="footer-hours-mobile">
        <FooterAccordion title="Business Hours" icon={<FiClock size={18} />}>
          <HoursList />
        </FooterAccordion>
      </div>
    </>
  );
}
