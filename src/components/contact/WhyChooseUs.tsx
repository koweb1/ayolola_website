import { motion } from "motion/react";
import { LuCar, LuCalendarCheck, LuWrench } from "react-icons/lu";
import { BsEmojiSmile } from "react-icons/bs";
import "./whychooseus.css";

const stats = [
  {
    icon: <LuCar size={32} />,
    value: "500+",
    label: "Vehicles Repaired",
    sublabel: "And counting",
  },
  {
    icon: <LuCalendarCheck size={32} />,
    value: "10+",
    label: "Years Experience",
    sublabel: "In auto repair",
  },
  {
    icon: <LuWrench size={32} />,
    value: "Certified",
    label: "Technicians",
    sublabel: "Trained & experienced",
  },
  {
    icon: <BsEmojiSmile size={32} />,
    value: "98%",
    label: "Customer Satisfaction",
    sublabel: "Our top priority",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="why-choose-us__inner">
        <motion.h2
          className="why-choose-us__title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Why Customers Choose Us
        </motion.h2>

        <div className="why-choose-us__grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="why-choose-us__card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="why-choose-us__icon">{stat.icon}</div>
              <div className="why-choose-us__value">{stat.value}</div>
              <div className="why-choose-us__label">{stat.label}</div>
              <div className="why-choose-us__sublabel">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
