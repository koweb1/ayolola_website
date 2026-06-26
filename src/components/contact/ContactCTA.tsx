import { motion } from "motion/react";
import { LuCalendarDays } from "react-icons/lu";
import { Link } from "react-router";
import "./contactcta.css";

const ContactCTA = () => {
  return (
    <section className="contact-cta">
      <div className="contact-cta__inner">
        <motion.div
          className="contact-cta__content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="contact-cta__title">
            Ready to Get Your Car Serviced?
          </h2>
          <p className="contact-cta__subtitle">
            Book an appointment today and experience professional and reliable
            auto care.
          </p>
          <Link to="/booking" className="contact-cta__btn">
            <LuCalendarDays size={20} />
            Book an Appointment
          </Link>
        </motion.div>

        <motion.div
          className="contact-cta__image-wrapper"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/assets/images/cta-car.png"
            alt="Car ready for service"
            className="contact-cta__image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
