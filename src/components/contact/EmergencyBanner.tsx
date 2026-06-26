import { motion } from "motion/react";
import { IoCallOutline } from "react-icons/io5";
import { PiWarningBold } from "react-icons/pi";
import towTruck from "../../assets/contacttruck.png";
import "./emergencybanner.css";

const EmergencyBanner = () => {
  return (
    <section className="emergency-banner">
      <motion.div
        className="emergency-banner__inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Left */}
        <div className="emergency-banner__left">
          <div className="emergency-banner__icon">
            <PiWarningBold size={28} />
          </div>
          <div className="emergency-banner__text">
            <h3 className="emergency-banner__title">
              Need Emergency Roadside Assistance?
            </h3>
            <p className="emergency-banner__subtitle">
              Our team is available for urgent breakdowns and towing services.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="emergency-banner__right">
          <div className="emergency-banner__call">
            <span className="emergency-banner__call-label">
              Call Our Emergency Line
            </span>
            <span className="emergency-banner__call-number">
              +234 803 000 1122
            </span>
          </div>
          <a href="tel:+2348030001122" className="emergency-banner__btn">
            <IoCallOutline size={20} />
          </a>
        </div>

      
        <img src={towTruck} alt="" className="emergency-banner__truck" />
      </motion.div>
    </section>
  );
};

export default EmergencyBanner;
