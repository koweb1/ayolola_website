import "./serviceprocess.css";
import { motion } from "motion/react";
import { fadeUp } from "../../animation/animate";
import { LuCalendarDays } from "react-icons/lu";

import { TbCarGarage, TbTools, TbShieldCheck } from "react-icons/tb";

import { MdOutlineDirectionsCar } from "react-icons/md";

import ProcessStep from "./ProcessStep";

export default function ServiceProcess() {
  const steps = [
    {
      number: "01",
      icon: <LuCalendarDays size={35} />,
      title: "Book Appointment",
      description:
        "Schedule your visit online or by phone at your convenience.",
    },

    {
      number: "02",
      icon: <TbCarGarage size={35} />,
      title: "Vehicle Inspection",
      description: "Our technicians perform a detailed diagnostic inspection.",
    },

    {
      number: "03",
      icon: <TbTools size={35} />,
      title: "Repair & Service",
      description: "We complete all approved repairs using quality parts.",
    },

    {
      number: "04",
      icon: <TbShieldCheck size={35} />,
      title: "Quality Check",
      description: "Every repair undergoes strict testing before delivery.",
    },

    {
      number: "05",
      icon: <MdOutlineDirectionsCar size={35} />,
      title: "Vehicle Delivery",
      description: "Collect your vehicle and drive away with confidence.",
    },
  ];

  return (
    <section className="service-process-section">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <span className="section-small-title">OUR PROCESS</span>

        <h2>Our Simple Service Process</h2>

        <p className="process-description">
          A straightforward process designed to provide transparency, speed and
          quality service.
        </p>

        <div className="process-container">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
