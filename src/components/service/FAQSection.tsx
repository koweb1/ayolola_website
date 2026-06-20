import "./faqsection.css";
import { motion } from "motion/react";
import { fadeUp } from "../../animation/animate";
import FAQItem from "./FAQItem";

export default function FAQSection() {
  const faqs = [
    {
      question: "Do you specialize in Toyota and Volkswagen vehicles?",
      answer:
        "Yes. Our technicians have extensive experience servicing and repairing Toyota and Volkswagen vehicles.",
    },

    {
      question: "Do I need an appointment before visiting?",
      answer:
        "Appointments are recommended to ensure faster service, but walk-ins are also welcome.",
    },

    {
      question: "Do you use genuine replacement parts?",
      answer:
        "Yes. We use genuine or high-quality OEM equivalent parts for all repairs.",
    },

    {
      question: "How long does a typical repair take?",
      answer:
        "Repair time depends on the issue, but we always provide an estimated completion time after inspection.",
    },

    {
      question: "Do you offer vehicle diagnostics?",
      answer:
        "Yes. We use advanced diagnostic equipment to accurately identify vehicle faults.",
    },

    {
      question: "Can I get a repair estimate first?",
      answer:
        "Absolutely. We provide transparent estimates before any repair work begins.",
    },
  ];

  return (
    <section className="faq-section">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
      <span className="section-small-title">FAQ</span>

      <h2>Frequently Asked Questions</h2>

      <p className="faq-description">
        Find answers to the most common questions about our services and repair
        process.
      </p>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      </motion.div>
    </section>
  );
}
