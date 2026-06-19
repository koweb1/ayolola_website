import "./ctasection.css";
import { motion } from "motion/react";
import { fadeUp } from "../../animation/animate";
import { LuCalendarDays } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";

import carImage from "../../assets/car_image.png";

export default function CTASection() {
  return (
    <motion.section
      className="cta-section"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="cta-content">
        <div className="cta-left">
          <span className="cta-small-title">READY TO GET STARTED?</span>

          <h2>
            We're Here To Keep
            <br />
            You Moving
          </h2>

          <p>
            Whether you need routine maintenance, diagnostics, or major repairs,
            our expert technicians are ready to help. Book your appointment
            today.
          </p>

          <div className="cta-buttons">
            <button className="cta-book-btn">
              <LuCalendarDays size={20} />
              Book Appointment
            </button>

            <button className="cta-call-btn">
              <IoCallOutline size={20} />
              Call Us Now
            </button>
          </div>
        </div>

        <div className="cta-right">
          <img src={carImage} alt="Vehicle Service" />
        </div>
      </div>
    </motion.section>
  );
}
