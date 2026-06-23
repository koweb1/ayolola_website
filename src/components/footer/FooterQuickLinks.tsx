import { Link } from "react-router";
import FooterAccordion from "./FooterAccordion";
import { FiLink } from "react-icons/fi";
import "./footerquicklinks.css";

export default function FooterQuickLinks() {
  const links = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "How It Works", path: "/how-it-works" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Desktop */}
      <div className="footer-quicklinks-desktop">
        <h4 className="footer-col-title">Quick Links</h4>
        <ul className="footer-quicklinks-list">
          {links.map((link) => (
            <li key={link.label}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile */}
      <div className="footer-quicklinks-mobile">
        <FooterAccordion title="Quick Links" icon={<FiLink size={18} />}>
          <ul className="footer-quicklinks-list">
            {links.map((link) => (
              <li key={link.label}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </FooterAccordion>
      </div>
    </>
  );
}
