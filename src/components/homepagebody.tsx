import "./homepagebody.css";
import car from "../assets/car_image.png";
import { LuCalendarDays } from "react-icons/lu";
import { ShieldCheck, Wrench, Clock4, Headset } from "lucide-react";
import { IoIosCall } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

export default function Homepagebody() {
  return (
    <div className="homepagebody-container">
      {/* ── DESKTOP layout ── */}
      <div className="homepagebody-body-container">
        <div className="homepagebody-body-text">
          <h1>
            expert care for your <br /> <span>toyota</span> &{" "}
            <span>volkswagen</span>
          </h1>
          <h4>
            Service. Repair. Diagnosis. <span>Reliable.</span>
          </h4>
          <p>Dealer-level expertise and personal service you can trust.</p>

          <div className="homepagebody-body-buttons">
            <button className="homepagebody-body-button1">
              <LuCalendarDays size={22} /> Book an Appointment
            </button>
            <button className="homepagebody-body-button2">
              <IoIosCall size={22} /> Contact Us
            </button>
          </div>

          <div className="homepagebody-body-stars-container">
            <div className="homepagebody-body-stars">
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
            </div>
            <span>4.9/5 from 500+ customers</span>
          </div>
        </div>

        <div className="homepagebody-body-image">
          <img src={car} alt="Car" />
        </div>
      </div>

      {/* ── MOBILE layout ── */}
      <div className="homepagebody-mobile">
        {/* Hero image */}
        <div className="homepagebody-mobile-image">
          <img src={car} alt="Car" />

          {/* Stars badge floating over image bottom */}
          <div className="homepagebody-mobile-stars-badge">
            <div className="homepagebody-mobile-stars">
              <FaStar size={18} />
              <FaStar size={18} />
              <FaStar size={18} />
              <FaStar size={18} />
              <FaStar size={18} />
            </div>
            <span>4.9/5 from 500+ customers</span>
          </div>
        </div>

        {/* Text content */}
        <div className="homepagebody-mobile-content">
          <h1>
            Expert Care For Your <br />
            <span>Toyota</span> & <span>Volkswagen</span>
          </h1>
          <p>
            Dealer-level service. Diagnostics. Repairs.{" "}
            <span className="homepagebody-mobile-reliable">Reliable.</span>
          </p>

          {/* Stacked full-width buttons */}
          <div className="homepagebody-mobile-buttons">
            <button className="homepagebody-mobile-btn-primary">
              <LuCalendarDays size={20} /> Book an Appointment
            </button>
            <button className="homepagebody-mobile-btn-outline">
              <IoIosCall size={20} /> Call Us Now
            </button>
          </div>
        </div>

        {/* Icons — 3 column */}
        <div className="homepagebody-mobile-icons">
          <div className="homepagebody-mobile-icon-item">
            <div className="homepagebody-mobile-icon-circle">
              <ShieldCheck size={24} color="#0d5bff" />
            </div>
            <p>Certified Technicians</p>
          </div>
          <div className="homepagebody-mobile-icon-divider" />
          <div className="homepagebody-mobile-icon-item">
            <div className="homepagebody-mobile-icon-circle">
              <Wrench size={24} color="#0d5bff" />
            </div>
            <p>Genuine Parts Guaranteed</p>
          </div>
          <div className="homepagebody-mobile-icon-divider" />
          <div className="homepagebody-mobile-icon-item">
            <div className="homepagebody-mobile-icon-circle">
              <Clock4 size={24} color="#0d5bff" />
            </div>
            <p>Fast Turnaround</p>
          </div>
        </div>
      </div>

      {/* ── SHARED icons bar (desktop only) ── */}
      <div className="homepagebody-body-icons-container">
        <div className="homepagebody-body-icons-subcontainer">
          <div className="homepagebody-body-icons">
            <div className="homepagebody-body-icon">
              <ShieldCheck size={32} color="#0d5bff" />
            </div>
            <div className="homepagebody-body-icons-text">
              <h4>Certified Technicians</h4>
              <p>Trained and experienced</p>
              <p>expert you can trust.</p>
            </div>
          </div>
          <div className="homepagebody-body-icons">
            <div className="homepagebody-body-icon">
              <Wrench size={32} color="#0d5bff" />
            </div>
            <div className="homepagebody-body-icons-text">
              <h4>Genuine Parts</h4>
              <p>We use only genuine parts</p>
              <p>For lasting performance.</p>
            </div>
          </div>
          <div className="homepagebody-body-icons">
            <div className="homepagebody-body-icon">
              <Clock4 size={32} color="#0d5bff" />
            </div>
            <div className="homepagebody-body-icons-text">
              <h4>Fast Turnaround</h4>
              <p>Quick and efficient service</p>
              <p>to get you back on the road.</p>
            </div>
          </div>
          <div className="homepagebody-body-icons no-border">
            <div className="homepagebody-body-icon">
              <Headset size={32} color="#0d5bff" />
            </div>
            <div className="homepagebody-body-icons-text">
              <h4>Customer Support</h4>
              <p>We're here to help you</p>
              <p>every step of the way.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}