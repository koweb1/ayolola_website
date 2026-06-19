import "./herosection.css";
import { motion } from "motion/react";
import {fadeUp} from "../../animation/animate"
import { LuCalendarDays } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineVerifiedUser, MdOutlineBuild } from "react-icons/md";
import { TbEngine } from "react-icons/tb";
import { PiTimerBold } from "react-icons/pi";

import heroImage from "../../assets/car_image.png";

export default function HeroSection() {
  return (
    <motion.section className="services-hero">
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
              <LuCalendarDays size={20} />
              Book an Appointment
            </button>

            <button className="hero-call-btn">
              <IoCallOutline size={20} />
              Call Us Now
            </button>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
              <MdOutlineVerifiedUser size={22} />
              <span>Certified Technicians</span>
            </div>

            <div className="hero-feature">
              <MdOutlineBuild size={22} />
              <span>Genuine Parts</span>
            </div>

            <div className="hero-feature">
              <TbEngine size={22} />
              <span>Advanced Diagnostics</span>
            </div>

            <div className="hero-feature">
              <PiTimerBold size={22} />
              <span>Fast Turnaround</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="services-hero-right"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={heroImage} alt="" />
        </motion.div>
      </div>
    </motion.section>
  );
}
