import { motion } from "motion/react";
import { LuCalendarDays } from "react-icons/lu";
import { Link } from "react-router";
import ctaBg from "../../assets/contactcta-image.png";
import "./contactcta.css";

const ContactCTA = () => {
  return (
    <section className="contact-cta">
      <motion.div
        className="contact-cta__inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <img src={ctaBg} alt="" className="contact-cta__bg" />

        <div className="contact-cta__content">
          <div className="">
            <h2 className="contact-cta__title">
            Ready to Get Your Car Serviced?
          </h2>
          <p className="contact-cta__subtitle">
            Book an appointment today and experience professional and reliable
            auto care.
          </p>
          </div>
          
          <Link to="/booking" className="contact-cta__btn">
            <LuCalendarDays size={20} />
            Book an Appointment
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;