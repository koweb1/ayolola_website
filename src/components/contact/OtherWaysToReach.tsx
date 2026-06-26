import { motion } from "motion/react";
import { BsChevronRight } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineChat } from "react-icons/md";
import { TbShare } from "react-icons/tb";
import "./otherwaystoreach.css";

const OtherWaysToReach = () => {
  return (
    <section className="other-ways">
      <div className="other-ways__inner">
        <motion.h2
          className="other-ways__title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Other Ways to Reach Us
        </motion.h2>

        {/* Reach rows */}
        <div className="other-ways__list">
          <motion.a
            href="https://wa.me/2348012345678"
            className="other-ways__row"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div
              className="other-ways__row-icon"
              style={{ background: "#25D366" }}
            >
              <IoLogoWhatsapp size={22} color="#fff" />
            </div>
            <div className="other-ways__row-text">
              <span className="other-ways__row-title">WhatsApp</span>
              <span className="other-ways__row-subtitle">
                Chat with us on WhatsApp
              </span>
            </div>
            <BsChevronRight className="other-ways__row-arrow" size={16} />
          </motion.a>

          <motion.a
            href="#"
            className="other-ways__row"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div
              className="other-ways__row-icon"
              style={{ background: "#0d5bff" }}
            >
              <MdOutlineChat size={22} color="#fff" />
            </div>
            <div className="other-ways__row-text">
              <span className="other-ways__row-title">Live Chat</span>
              <span className="other-ways__row-subtitle">
                Chat with our support team
              </span>
            </div>
            <BsChevronRight className="other-ways__row-arrow" size={16} />
          </motion.a>

          <motion.a
            href="#"
            className="other-ways__row"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div
              className="other-ways__row-icon"
              style={{ background: "#0a1628" }}
            >
              <TbShare size={22} color="#fff" />
            </div>
            <div className="other-ways__row-text">
              <span className="other-ways__row-title">Follow Us</span>
              <span className="other-ways__row-subtitle">
                Stay updated on our services
              </span>
            </div>
            <BsChevronRight className="other-ways__row-arrow" size={16} />
          </motion.a>
        </div>

        {/* Social icons */}
        <motion.div
          className="other-ways__socials"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <a
            href="#"
            className="other-ways__social-icon"
            style={{ background: "#1877F2" }}
          >
            <FaFacebookF size={18} color="#fff" />
          </a>
          <a
            href="#"
            className="other-ways__social-icon"
            style={{ background: "#E1306C" }}
          >
            <FaInstagram size={18} color="#fff" />
          </a>
          <a
            href="#"
            className="other-ways__social-icon"
            style={{ background: "#000000" }}
          >
            <FaXTwitter size={18} color="#fff" />
          </a>
          <a
            href="#"
            className="other-ways__social-icon"
            style={{ background: "#FF0000" }}
          >
            <FaYoutube size={18} color="#fff" />
          </a>
          <a
            href="#"
            className="other-ways__social-icon"
            style={{ background: "#010101" }}
          >
            <FaTiktok size={18} color="#fff" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OtherWaysToReach;
