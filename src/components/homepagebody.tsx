import "./homepagebody.css"
import car from "../assets/car_image.png"
import { LuCalendarDays } from "react-icons/lu";
import { ShieldCheck, Wrench, Clock4, Headset  } from "lucide-react";
import { IoIosCall } from "react-icons/io";

import { FaStar } from "react-icons/fa6";

export default function Homepagebody() {
  return (
    <div className="homepagebody-container">
      <div className="homepagebody-body-container">
        <div className="homepagebody-body-text">
          <h1>
            expert care for your <br /> <span>toyota</span> &{" "}
            <span>volkswagen</span>
          </h1>
          <h4>
            Service. Repair. diagonsis. <span> Reliable.</span>
          </h4>
          <p>Dealer-level experties and personal service you can trust.</p>

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
            <span>4.5/5 from 5000+ customers.</span>
          </div>
        </div>
        <div className="homepagebody-body-image">
          <img src={car} />
        </div>
      </div>
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
            <div className="homepagebody-body-icon  ">
              <Headset size={32} color="#0d5bff" />
            </div>

            <div className="homepagebody-body-icons-text">
              <h4>Customer Support</h4>
              <p>We're here to help you</p>
              <p>every step of the way. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}