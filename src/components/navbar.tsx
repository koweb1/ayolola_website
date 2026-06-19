import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router";
import { LuCalendarDays } from "react-icons/lu";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose, IoCallOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { MdMiscellaneousServices } from "react-icons/md";
import { TbInfoCircle } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar-container">
        <nav>
          <div className="navbar-logo">
            <img src={logo} alt="" />
            <div className="navbar-logo-text">
              <h4>AYOLOLA MOTOR'S LIMITED</h4>
              <span>TOYOTA & VOLKSWAGEN SPECIALISTS</span>
            </div>
          </div>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>How It Work</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>

          <div className="nav-book-appointment">
            <button>
              <LuCalendarDays size={22} /> Book an Appointment
            </button>
          </div>

          <div className="navbar-hamburger" onClick={() => setMenuOpen(true)}>
            <RiMenu3Line size={28} />
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-top">
          <div className="mobile-menu-logo">
            <img src={logo} alt="" />
            <div className="mobile-menu-logo-text">
              <h4>AYOLOLA MOTORS LIMITED</h4>
              <span>TOYOTA & VOLKSWAGEN SPECIALISTS</span>
            </div>
          </div>
          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
          >
            <IoClose size={28} />
          </button>
        </div>

        <ul className="mobile-menu-links">
          <li onClick={() => setMenuOpen(false)}>
            <GoHome size={22} />
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <MdMiscellaneousServices size={22} />
            <Link to="/services">Service</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <TbInfoCircle size={22} />
            How It Works
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <BsPeopleFill size={22} />
            About Us
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <IoCallOutline size={22} />
            Contact Us
          </li>
        </ul>

        <div className="mobile-menu-buttons">
          <button className="mobile-menu-btn-primary">
            <LuCalendarDays size={20} /> Book an Appointment
          </button>
          <button className="mobile-menu-btn-outline">
            <IoCallOutline size={20} /> Call Us Now
          </button>
        </div>

        <div className="mobile-menu-socials">
          <span>Follow Us</span>
          <div className="mobile-menu-social-icons">
            <div className="social-icon">
              <FaFacebookF size={18} />
            </div>
            <div className="social-icon">
              <FaInstagram size={18} />
            </div>
            <div className="social-icon">
              <FaGoogle size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
