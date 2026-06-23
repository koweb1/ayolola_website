import { FiTool } from "react-icons/fi";
import FooterAccordion from "./FooterAccordion";
import "./footerservices.css";

export default function FooterServices() {
  const services = [
    "Diagnostics",
    "Engine Repair",
    "Brake Service",
    "AC Service",
    "Transmission",
    "Oil Change",
  ];

  return (
    <>
      {/* Desktop */}
      <div className="footer-services-desktop">
        <h4 className="footer-col-title">Our Services</h4>
        <ul className="footer-services-list">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>

      {/* Mobile */}
      <div className="footer-services-mobile">
        <FooterAccordion title="Our Services" icon={<FiTool size={18} />}>
          <ul className="footer-services-list">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </FooterAccordion>
      </div>
    </>
  );
}
