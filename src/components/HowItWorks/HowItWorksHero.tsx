import { motion } from "motion/react";
import { BsCalendar2Check, BsTelephone } from "react-icons/bs";
import { Link } from "react-router";
import heroImage from "../../assets/how-it-work.png";
import "./howitworkshero.css";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "5,000+", label: "Vehicles Serviced" },
  { value: "98%", label: "Customer Satisfaction" },
];

export default function HowItWorksHero() {
  return (
    <section className="hiw-hero">
      <div className="hiw-image-wrapper">
        <img
          src={heroImage}
          alt="Mechanic working on a vehicle"
          className="hiw-hero-image"
        />
        <div className="hiw-overlay" />
      </div>

      <div className="hiw-content-wrapper">
        <div className="hiw-text-side">
          <motion.div
            className="hiw-text-content"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="hiw-eyebrow">HOW IT WORKS</span>
            <h1 className="hiw-heading">
              Simple. Transparent.
              <br />
              Reliable Service.
            </h1>
            <p className="hiw-subtext">
              Our streamlined process ensures your Toyota or Volkswagen gets the
              expert care it deserves.
            </p>
            <div className="hiw-cta-row">
              <Link to="/booking" className="hiw-btn-primary">
                <BsCalendar2Check className="hiw-btn-icon" />
                Book an Appointment
              </Link>
              <Link to="/contact" className="hiw-btn-outline">
                <BsTelephone className="hiw-btn-icon" />
                Contact Us
              </Link>
            </div>
          </motion.div>

          <div className="hiw-dot-grid" />
        </div>
      </div>

      {/* Floating stats card */}
      <motion.div
        className="hiw-stats-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      >
        <div className="hiw-brand-row">
          <div className="hiw-brand-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg"
              alt="Toyota"
              className="hiw-brand-logo"
            />
            <div>
              <p className="hiw-brand-name">TOYOTA</p>
              <p className="hiw-brand-sub">Specialist</p>
            </div>
          </div>
          <div className="hiw-brand-divider" />
          <div className="hiw-brand-item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg"
              alt="Volkswagen"
              className="hiw-brand-logo"
            />
            <div>
              <p className="hiw-brand-name">Volkswagen</p>
              <p className="hiw-brand-sub">Specialist</p>
            </div>
          </div>
        </div>

        <div className="hiw-card-divider" />

        <div className="hiw-stats-row">
          {stats.map((stat) => (
            <div key={stat.label} className="hiw-stat-item">
              <span className="hiw-stat-value">{stat.value}</span>
              <span className="hiw-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
