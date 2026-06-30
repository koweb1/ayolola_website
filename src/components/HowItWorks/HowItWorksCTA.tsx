import { motion } from "motion/react";
import {
  BsCalendar2Check,
  BsPerson,
  BsGear,
  BsCheckCircle,
  BsTelephone,
} from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";
import { Link } from "react-router";
import "./howitworkscta.css";

const trustBadges = [
  { icon: BsCalendar2Check, label: "Quick Booking" },
  { icon: BsPerson, label: "Expert Technicians" },
  { icon: BsGear, label: "Genuine Parts" },
  { icon: BsCheckCircle, label: "Satisfaction Guaranteed" },
];

export default function HowItWorksCTA() {
  return (
    <section className="hiw-cta-section">
      <div className="hiw-cta-inner">
        {/* ── Top row: headline + button ── */}
        <div className="hiw-cta-top-row">
          <motion.div
            className="hiw-cta-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="hiw-cta-headline-row">
              <div className="hiw-cta-cal-icon-wrapper">
                <BsCalendar2Check className="hiw-cta-cal-icon" />
              </div>
              <div>
                <h2 className="hiw-cta-heading">
                  Ready to Get Back on the Road?
                </h2>
                <p className="hiw-cta-subtext">
                  Book your Toyota or Volkswagen service in under 2 minutes.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hiw-cta-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <Link to="/booking" className="hiw-cta-button">
              <LuCalendarDays className="hiw-cta-btn-icon" />
              Book an Appointment
            </Link>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div className="hiw-cta-divider" />

        {/* ── Bottom row: badges + phone ── */}
        <motion.div
          className="hiw-cta-bottom-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="hiw-cta-badges-col">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className="hiw-cta-badge">
                  <div className="hiw-cta-badge-icon-wrapper">
                    <Icon className="hiw-cta-badge-icon" />
                  </div>
                  <span className="hiw-cta-badge-label">{badge.label}</span>
                </div>
              );
            })}
          </div>

          <div className="hiw-cta-phone-row">
            <div className="hiw-cta-phone-icon-wrapper">
              <BsTelephone className="hiw-cta-phone-icon" />
            </div>
            <span className="hiw-cta-phone-text">
              or call us&nbsp;<strong>0803 123 4567</strong>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
