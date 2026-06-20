import "./whychooseus.css";
import { motion } from "motion/react";
import { fadeUp } from "../../animation/animate";
import { MdVerifiedUser, MdOutlineBuild } from "react-icons/md";

import { TbTools, TbClockHour4 } from "react-icons/tb";

import FeatureCard from "./FeatureCard";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <MdVerifiedUser size={40} />,
      title: "Certified Technicians",
      description:
        "Factory trained professionals with years of experience handling Toyota and Volkswagen vehicles.",
    },

    {
      icon: <MdOutlineBuild size={40} />,
      title: "Genuine Parts",
      description:
        "We use only trusted and genuine replacement parts for reliability and long-term performance.",
    },

    {
      icon: <TbTools size={40} />,
      title: "Advanced Equipment",
      description:
        "Modern diagnostic tools allow us to identify and solve vehicle issues accurately.",
    },

    {
      icon: <TbClockHour4 size={40} />,
      title: "Fast Turnaround",
      description:
        "Efficient service process designed to get you back on the road quickly and safely.",
    },
  ];

  return (
    <section className="why-choose-us-section">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <span className="section-small-title">WHY CHOOSE US</span>

        <h2>Service You Can Trust</h2>

        <p className="why-choose-description">
          We combine expert technicians, modern technology and exceptional
          customer care to deliver reliable automotive solutions every time.
        </p>

        <div className="why-choose-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
