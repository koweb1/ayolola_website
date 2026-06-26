import { motion } from "motion/react";

import { IoCheckmarkCircleOutline } from "react-icons/io5";
import "./serviceareas.css";

const areas = [
  "Ikeja",
  "Lekki",
  "Victoria Island",
  "Yaba",
  "Surulere",
  "Ajah",
  "And surrounding areas",
];

const ServiceAreas = () => {
  return (
    <section className="service-areas">
      <div className="service-areas__inner">
        {/* Left — Text */}
        <motion.div
          className="service-areas__content"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="service-areas__title">We Serve These Areas</h2>
          <p className="service-areas__subtitle">
            We proudly provide our services in:
          </p>
          <ul className="service-areas__list">
            {areas.map((area, index) => (
              <motion.li
                key={index}
                className="service-areas__item"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.07 }}
              >
                <IoCheckmarkCircleOutline
                  className="service-areas__check"
                  size={25}
                />
                <span>{area}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right — Map graphic */}
        <motion.div
          className="service-areas__map"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="service-areas__map-graphic">
            <svg
              viewBox="0 0 300 340"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="service-areas__svg"
            >
              {/* Nigeria silhouette shape */}
              <path
                d="M80,20 L100,10 L140,8 L180,15 L220,20 L260,40 L280,70
                   L290,110 L285,150 L275,185 L260,210 L240,240 L210,270
                   L185,300 L165,320 L150,330 L135,320 L115,300 L90,270
                   L65,240 L45,210 L30,180 L20,150 L18,110 L25,75 L45,50 Z"
                fill="#e8edf4"
                stroke="#d1d9e6"
                strokeWidth="2"
              />
              {/* Pin */}
              <circle cx="175" cy="155" r="14" fill="#0d5bff" opacity="0.15" />
              <circle cx="175" cy="155" r="8" fill="#0d5bff" />
              <circle cx="175" cy="155" r="3" fill="#ffffff" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreas;
