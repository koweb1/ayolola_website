import "./servicecategories.css";
import { motion } from "motion/react";
import { fadeUp } from "../../animation/animate";
import { TbEngine, TbAirConditioning } from "react-icons/tb";

import { MdElectricalServices, MdBuild } from "react-icons/md";

import { GiGearStickPattern } from "react-icons/gi";

import ServiceCard from "./ServiceCard";

export default function ServiceCategories() {
  const services = [
    {
      icon: <TbEngine size={40} />,
      title: "Engine Services",
      services: [
        "Engine Diagnostics",
        "Engine Repair",
        "Engine Rebuild",
        "Timing Belt Replacement",
        "Performance Tuning",
      ],
    },

    {
      icon: <MdElectricalServices size={40} />,
      title: "Electrical Services",
      services: [
        "Battery Testing",
        "Alternator Repair",
        "Starter Motor Repair",
        "Wiring Repairs",
        "Sensor Diagnostics",
      ],
    },

    {
      icon: <GiGearStickPattern size={40} />,
      title: "Transmission Services",
      services: [
        "Gearbox Diagnostics",
        "Automatic Transmission Service",
        "Manual Transmission Repair",
        "Clutch Replacement",
        "Transmission Oil Change",
      ],
    },

    {
      icon: <TbAirConditioning size={40} />,
      title: "AC Services",
      services: [
        "AC Refill",
        "AC Gas Recharge",
        "Compressor Repair",
        "Leak Detection",
        "Cooling System Inspection",
      ],
    },

    {
      icon: <MdBuild size={40} />,
      title: "Maintenance Services",
      services: [
        "Oil Change",
        "Brake Service",
        "Suspension Check",
        "Tyre Rotation",
        "Vehicle Inspection",
      ],
    },
  ];

  return (
    <motion.section
      className="service-categories-section"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="section-small-title">WHAT WE OFFER</span>

      <h2>Our Service Categories</h2>

      <div className="service-categories-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            services={service.services}
          />
        ))}
      </div>
    </motion.section>
  );
}
