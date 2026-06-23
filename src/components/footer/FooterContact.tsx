import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import FooterAccordion from "./FooterAccordion";
import "./footercontact.css";

export default function FooterContact() {
  const contactItems = [
    {
      icon: <IoCallOutline size={18} />,
      text: "+234 801 234 5678",
      href: "tel:+2348012345678",
    },
    {
      icon: <MdOutlineEmail size={18} />,
      text: "info@ayolamotors.com",
      href: "mailto:info@ayolamotors.com",
    },
    {
      icon: <MdOutlineLocationOn size={18} />,
      text: "12 Auto Street, Ikeja, Lagos, Nigeria",
      href: null,
    },
  ];

  const ContactList = () => (
    <ul className="footer-contact-list">
      {contactItems.map((item, index) => (
        <li key={index} className="footer-contact-item">
          <span className="footer-contact-icon">{item.icon}</span>
          {item.href ? (
            <a href={item.href}>{item.text}</a>
          ) : (
            <span className="footer-contact-text">{item.text}</span>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop */}
      <div className="footer-contact-desktop">
        <h4 className="footer-col-title">Contact Info</h4>
        <ContactList />
      </div>

      {/* Mobile */}
      <div className="footer-contact-mobile">
        <FooterAccordion
          title="Contact Info"
          icon={<IoCallOutline size={18} />}
        >
          <ContactList />
        </FooterAccordion>
      </div>
    </>
  );
}
