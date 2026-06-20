import "./testimonials.css";
import { motion } from "motion/react";
import { fadeUp } from "../../animation/animate";
import TestimonialCard from "./TestimonialCard";

import customer1 from "../../assets/testimony1.jpeg";
import customer2 from "../../assets/testimony-woman.avif";
import customer3 from "../../assets/testimony1.jpeg";

export default function Testimonials() {
  const testimonials = [
    {
      image: customer1,
      name: "Michael Johnson",
      vehicle: "Toyota Corolla",
      review:
        "Excellent service and honest pricing. My vehicle feels brand new again.",
    },

    {
      image: customer2,
      name: "Sarah Williams",
      vehicle: "Volkswagen Passat",
      review:
        "Professional technicians and quick turnaround. Highly recommended.",
    },

    {
      image: customer3,
      name: "David Brown",
      vehicle: "Toyota Camry",
      review:
        "The diagnostics were accurate and the repair was completed perfectly.",
    },
  ];

  return (
    <section className="testimonials-section">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <span className="section-small-title">TESTIMONIALS</span>

        <h2>Trusted By Vehicle Owners</h2>

        <p className="testimonials-description">
          Hear what our satisfied customers have to say about their experience
          with Ayolola Motors Limited.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              vehicle={testimonial.vehicle}
              review={testimonial.review}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
