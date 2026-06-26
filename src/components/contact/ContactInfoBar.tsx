import { motion } from "motion/react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { LuClock } from "react-icons/lu";
import "./contactinfobar.css";

const cards = [
  {
    icon: <IoCallOutline size={22} />,
    title: "Call Us",
    primary: "+234 801 234 5678",
    secondary: "Mon - Sat: 8:00 AM - 6:00 PM",
  },
  {
    icon: <MdOutlineEmail size={22} />,
    title: "Email Us",
    primary: "info@ayololamotors.com",
    secondary: "We'll reply as soon as possible",
  },
  {
    icon: <GoLocation size={22} />,
    title: "Visit Us",
    primary: "Ayolola Motor's Ltd 129 Bode Thomas street Surulere",
    secondary: "Get Directions →",
    isLink: true,
  },
  {
    icon: <LuClock size={22} />,
    title: "Business Hours",
    primary: "Mon - Fri: 8:00 AM - 6:00 PM",
    secondary: "Saturday: 8:00 AM - 4:00 PM",
    tertiary: "Sunday: Closed",
  },
];

const ContactInfoBar = () => {
  return (
    <section className="contact-info-bar">
      <div className="contact-info-bar__grid">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="contact-info-bar__card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="contact-info-bar__icon">{card.icon}</div>
            <div className="contact-info-bar__text">
              <p className="contact-info-bar__title">{card.title}</p>
              <p className="contact-info-bar__primary">{card.primary}</p>
              {card.isLink ? (
                <a href="#map" className="contact-info-bar__link">
                  {card.secondary}
                </a>
              ) : (
                <p className="contact-info-bar__secondary">{card.secondary}</p>
              )}
              {card.tertiary && (
                <p className="contact-info-bar__secondary">{card.tertiary}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfoBar;
