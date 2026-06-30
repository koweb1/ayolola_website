import { motion } from "motion/react";
import {
  BsShieldCheck,
  BsGear,
  BsTag,
  BsAward,
  BsTelephone,
} from "react-icons/bs";
import { Link } from "react-router";
import mechanicImage from "../../assets/mechanicImage.png";
import "./trusthighlights.css";

const trustItems = [
  {
    icon: BsShieldCheck,
    title: "Certified Technicians",
    description: "Trained experts with Toyota & Volkswagen experience.",
  },
  {
    icon: BsGear,
    title: "Genuine Parts",
    description: "We use only genuine parts for lasting performance.",
  },
  {
    icon: BsTag,
    title: "Transparent Pricing",
    description: "No hidden fees. You approve before we proceed.",
  },
  {
    icon: BsAward,
    title: "Warranty Backed",
    description: "All repairs come with warranty for your peace of mind.",
  },
];

export default function TrustHighlights() {
  return (
    <section className="th-section">
      <div className="th-inner">
        {/* ── Left: 2x2 trust grid ── */}
        <motion.div
          className="th-left-side"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="th-trust-grid">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="th-trust-item">
                  <div className="th-trust-icon-wrapper">
                    <Icon className="th-trust-icon" />
                  </div>
                  <div className="th-trust-text">
                    <h4 className="th-trust-title">{item.title}</h4>
                    <p className="th-trust-description">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Right: mechanic photo + copy ── */}
        <motion.div
          className="th-right-side"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <div className="th-right-content">
            <div className="th-photo-wrapper">
              <img
                src={mechanicImage}
                alt="Ayolola Motors certified technician"
                className="th-mechanic-photo"
              />
              <div className="th-cert-badge">
                <BsShieldCheck className="th-cert-icon" />
                <span className="th-cert-label">
                  Toyota & Volkswagen Certified Specialist
                </span>
              </div>
            </div>

            <div className="th-copy-block">
              <span className="th-eyebrow">EXPERT CARE. EVERY TIME</span>
              <h2 className="th-heading">
                Your Toyota or Volkswagen
                <br />
                is in safe hands.
              </h2>
              <p className="th-subtext">
                Skilled technicians. Trusted by thousands of happy customers.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Have Questions CTA bar — mobile only */}
        <div className="th-help-bar">
          <div className="th-help-left">
            <div className="th-help-icon-wrapper">
              <BsTelephone className="th-help-icon" />
            </div>
            <div>
              <p className="th-help-title">Have Questions?</p>
              <p className="th-help-sub">
                Our team is here to help you every step of the way.
              </p>
            </div>
          </div>
          <Link to="/contact" className="th-help-btn">
            <BsTelephone />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
