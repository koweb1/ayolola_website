import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "motion/react";

import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { LuCar, LuFileText } from "react-icons/lu";
import { TbSend } from "react-icons/tb";
import { GoLocation } from "react-icons/go";

import "./contactformmap.css";

const ContactFormMap = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "",
    vehicleMake: "",
    vehicleModel: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="contact-form-map">
      <div className="contact-form-map__inner">

        {/* LEFT — Form */}
        <motion.div
          className="contact-form-map__form-wrapper"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="contact-form-map__form-title">Send Us a Message</h2>
          <p className="contact-form-map__form-subtitle">
            Fill the form below and we'll get back to you shortly.
          </p>

          <form className="contact-form-map__form" onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="cfm-row">
              <div className="cfm-field">
                <BsPerson className="cfm-field__icon" size={17} />
                <input type="text" name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} />
              </div>
              <div className="cfm-field">
                <MdOutlineEmail className="cfm-field__icon" size={17} />
                <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
              </div>
            </div>

            {/* Row 2 */}
            <div className="cfm-row">
              <div className="cfm-field">
                <IoCallOutline className="cfm-field__icon" size={17} />
                <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
              </div>
              <div className="cfm-field cfm-field--select">
                <select name="contactMethod" value={form.contactMethod} onChange={handleChange}>
                  <option value="">Preferred Contact Method</option>
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>
            </div>

            {/* Row 3 */}
            <div className="cfm-row">
              <div className="cfm-field">
                <LuCar className="cfm-field__icon" size={17} />
                <input type="text" name="vehicleMake" placeholder="Vehicle Make" value={form.vehicleMake} onChange={handleChange} />
              </div>
              <div className="cfm-field">
                <LuCar className="cfm-field__icon" size={17} />
                <input type="text" name="vehicleModel" placeholder="Vehicle Model" value={form.vehicleModel} onChange={handleChange} />
              </div>
            </div>

            {/* Subject */}
            <div className="cfm-field cfm-field--full">
              <LuFileText className="cfm-field__icon" size={17} />
              <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
            </div>

            {/* Message */}
            <div className="cfm-field cfm-field--full cfm-field--textarea">
              <textarea
                name="message"
                placeholder={`Describe Your Vehicle Problem\nTell us more about the issue you're experiencing.`}
                value={form.message}
                onChange={handleChange}
                rows={5}
              />
            </div>

            <button type="submit" className="cfm-submit">
              <TbSend size={18} />
              Send Message
            </button>
          </form>
        </motion.div>

        {/* RIGHT — Map */}
        <motion.div
          className="contact-form-map__map-wrapper"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="cfm-map">
            <iframe
              title="Ayolola Motors Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7262764767!2d3.3571!3d6.4977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c580e0c5c71%3A0x0!2s129+Bode+Thomas+St%2C+Surulere%2C+Lagos!5e0!3m2!1sen!2sng!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="cfm-map__footer">
            <div className="cfm-map__info">
              <p className="cfm-map__find-title">We're Easy to Find</p>
              <p className="cfm-map__find-text">
                129 Bode Thomas Street, Surulere, Lagos. Ample parking space available.
              </p>
            </div>
            
            <a href="https://www.google.com/maps/search/129+Bode+Thomas+Street+Surulere+Lagos"
              target="_blank"
              rel="noreferrer"
              className="cfm-map__directions-btn"
            >
              <GoLocation size={16} />
              Get Directions
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactFormMap;