import { motion } from "motion/react";
import {
  BsCalendar2Check,
  BsSearch,
  BsFileText,
  BsTools,
  BsShieldCheck,
  BsCarFront,
  BsTelephone,
  BsHeadset,
} from "react-icons/bs";
import { Link } from "react-router";
import "./processsteps.css";

const steps = [
  {
    number: 1,
    icon: BsCalendar2Check,
    title: "Book Service",
    description: "Choose your service, select a date and time that suits you.",
  },
  {
    number: 2,
    icon: BsSearch,
    title: "Vehicle Inspection",
    description: "Our certified technicians inspect your vehicle thoroughly.",
  },
  {
    number: 3,
    icon: BsFileText,
    title: "Receive Quote",
    description: "We provide a clear, detailed quote before any work begins.",
  },
  {
    number: 4,
    icon: BsTools,
    title: "Repair & Service",
    description: "We get to work using genuine parts and the latest equipment.",
  },
  {
    number: 5,
    icon: BsShieldCheck,
    title: "Quality Check",
    description: "Every vehicle goes through a detailed quality inspection.",
  },
  {
    number: 6,
    icon: BsCarFront,
    title: "Drive Away",
    description: "Your vehicle is ready. Safe, reliable and road-ready.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="ps-section">
      <div className="ps-inner">
        <div className="ps-section-label">OUR SERVICE PROCESS</div>
        <h2 className="ps-heading">How It Works – Step by Step</h2>
        <div className="ps-heading-underline" />

        <div className="ps-steps-row">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <motion.div
                key={step.number}
                className="ps-step-wrapper"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <div className="ps-step-card">
                  <div className="ps-step-number">{step.number}</div>
                  <div className="ps-icon-circle">
                    <Icon className="ps-step-icon" />
                  </div>
                  <div className="ps-step-text-block">
                    <h3 className="ps-step-title">{step.title}</h3>
                    <p className="ps-step-description">{step.description}</p>
                  </div>
                </div>

                {!isLast && (
                  <div className="ps-connector-wrapper">
                    <div className="ps-connector-line" />
                    <div className="ps-connector-arrow">&#8250;</div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Need Help bar — mobile only */}
        <div className="ps-help-bar">
          <div className="ps-help-left">
            <div className="ps-help-icon-wrapper">
              <BsHeadset className="ps-help-icon" />
            </div>
            <div>
              <p className="ps-help-title">Need Help?</p>
              <p className="ps-help-sub">Our team is here to assist you.</p>
            </div>
          </div>
          <Link to="/contact" className="ps-help-btn">
            <BsTelephone />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
