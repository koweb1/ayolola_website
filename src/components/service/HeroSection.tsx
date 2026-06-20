import "./herosection.css";
import { motion } from "motion/react";
import { fadeUp } from "../../animation/animate";
import { LuCalendarDays } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineVerifiedUser, MdOutlineBuild } from "react-icons/md";
import { TbEngine } from "react-icons/tb";
import { PiTimerBold } from "react-icons/pi";

import heroImage from "../../assets/services.png";

export default function HeroSection() {
  return (
    <section className="services-hero">
      <div className="services-hero-content">
        <motion.div
          className="services-hero-left"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <span className="services-hero-small-title">OUR SERVICES</span>

          <h1>
            COMPLETE AUTO CARE
            <span> SERVICES</span>
          </h1>

          <p>
            Toyota & Volkswagen specialists providing diagnostics, repairs,
            maintenance and expert vehicle care.
          </p>

          <div className="services-hero-buttons">
            <button className="hero-book-btn">
              <LuCalendarDays size={18} />
              Book an Appointment
            </button>

            <button className="hero-call-btn">
              <IoCallOutline size={18} />
              Call Us Now
            </button>
          </div>
        </motion.div>

        <div className="services-hero-right">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={heroImage} alt="" />
          </motion.div>
        </div>
      </div>

      <div className="hero-features-strip">
        <div className="hero-feature">
          <div className="hero-feature-icon">
            <MdOutlineVerifiedUser size={28} />
          </div>
          <div className="hero-feature-text">
            <h4>Certified Technicians</h4>
            <p>Trained and experienced experts you can trust.</p>
          </div>
        </div>

        <div className="hero-feature">
          <div className="hero-feature-icon">
            <MdOutlineBuild size={28} />
          </div>
          <div className="hero-feature-text">
            <h4>Genuine Parts</h4>
            <p>We use only genuine parts for lasting performance.</p>
          </div>
        </div>

        <div className="hero-feature">
          <div className="hero-feature-icon">
            <TbEngine size={28} />
          </div>
          <div className="hero-feature-text">
            <h4>Advanced Diagnostics</h4>
            <p>Accurate tools to diagnose issues correctly.</p>
          </div>
        </div>

        <div className="hero-feature">
          <div className="hero-feature-icon">
            <PiTimerBold size={28} />
          </div>
          <div className="hero-feature-text">
            <h4>Fast Turnaround</h4>
            <p>Quick, efficient service to get you back on the road.</p>
          </div>
        </div>
      </div>

      <div className="services-hero-spacer" />
    </section>
  );
}
