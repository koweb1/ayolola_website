import "./beforeaftersection.css";
import { motion } from "motion/react";
import { fadeUp } from "../../animation/animate";
import BeforeAfterCard from "./BeforeAfterCard";

import before1 from "../../assets/enginebefore.png";
import after1 from "../../assets/engineafter.png";

import before2 from "../../assets/acbefore.jpg";
import after2 from "../../assets/acafter.png";

import before3 from "../../assets/electricbefore.png";
import after3 from "../../assets/electricafter.png";

export default function BeforeAfterSection() {
  const results = [
    {
      title: "Engine Restoration",
      beforeImage: before1,
      afterImage: after1,
    },

    {
      title: "AC System Repair",
      beforeImage: before2,
      afterImage: after2,
    },

    {
      title: "Electrical Diagnostics",
      beforeImage: before3,
      afterImage: after3,
    },
  ];

  return (
    <section className="before-after-section">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
      <span className="section-small-title">REAL RESULTS</span>

      <h2>See The Difference</h2>

      <p className="before-after-description">
        Real examples of repairs and restoration work completed by our
        experienced technicians.
      </p>

      <div className="before-after-grid">
        {results.map((item, index) => (
          <BeforeAfterCard
            key={index}
            title={item.title}
            beforeImage={item.beforeImage}
            afterImage={item.afterImage}
          />
        ))}
      </div>
      </motion.div>
    </section>
  );
}
