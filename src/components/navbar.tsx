import "./navbar.css";
import { LuCalendarDays } from "react-icons/lu";
import { RiMenu3Line } from "react-icons/ri";
import logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <nav>
        <div className="navbar-logo">
          <img src={logo} alt="" />
          <div className="navbar-logo-text">
            <h4>AYOLOLA MOTOR'S LIMITED</h4>
            <span>TOYOTA & VOLKSWAGEN</span>
          </div>
        </div>

        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>How It Work</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>

        <div className="nav-book-appointment">
          <button>
            <LuCalendarDays size={22} /> Book an Appointment
          </button>
        </div>

        <div className="navbar-hamburger">
          <RiMenu3Line size={28} />
        </div>
      </nav>
    </div>
  );
}
