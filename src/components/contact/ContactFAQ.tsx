import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BsChevronDown } from "react-icons/bs";
import "./contactfaq.css";

const faqs = [
  {
    question: "Do I need an appointment?",
    answer:
      "While walk-ins are welcome, we strongly recommend booking an appointment to ensure a dedicated time slot and faster service. You can book online or call us directly.",
  },
  {
    question: "How long does a repair take?",
    answer:
      "Repair times vary depending on the service. Routine maintenance like oil changes take 30–60 minutes, while more complex repairs may take 1–3 days. We'll give you an accurate estimate when you bring in your vehicle.",
  },
  {
    question: "Do you offer towing services?",
    answer:
      "Yes, we offer emergency towing services across Lagos. Call our emergency line on +234 803 000 1122 and our team will be with you as soon as possible.",
  },
  {
    question: "What brands do you specialize in?",
    answer:
      "We are specialists in Toyota and Volkswagen vehicles. Our technicians are trained and certified to handle all models from both brands with precision and care.",
  },
  {
    question: "Do you use genuine parts?",
    answer:
      "Yes, we only use genuine OEM parts and high-quality approved alternatives to ensure the longevity and performance of your vehicle.",
  },
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="contact-faq">
      <div className="contact-faq__inner">
        <motion.h2
          className="contact-faq__title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="contact-faq__list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`contact-faq__item ${openIndex === index ? "contact-faq__item--open" : ""}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.07 }}
            >
              <button
                className="contact-faq__question"
                onClick={() => toggle(index)}
              >
                <span>{faq.question}</span>
                <motion.span
                  className="contact-faq__chevron"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <BsChevronDown size={16} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    className="contact-faq__answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
