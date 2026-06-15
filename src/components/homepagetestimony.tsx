import "./homepagetestimony.css";
import { FaStar } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import testimony1 from "../assets/testimony-woman.avif";
import testimony2 from "../assets/testimony.jpeg";
import testimony3 from "../assets/testimony1.jpeg";

export default function Homepagetestimony() {
  return (
    <div className="homepagetestimony-container">
      <h2>WHAT OUR CUSTOMERS SAY</h2>
      <h3>Trusted by Car Owners</h3>

      <div className="homepagetestimony-body">
        <div className="homepagetestimony-grid">
          <div className="homepagetestimony-card homepagetestimony-card-main">
            <div className="homepagetestimony-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              "Excellent service! My Volkswagen runs like new again. Highly
              recommended!"
            </p>
            <div className="homepagetestimony-user">
              <img src={testimony3} alt="David Okoro" />
              <div>
                <h4>David Okoro</h4>
                <span>Volkswagen Passat Owner</span>
              </div>
            </div>
          </div>

          <div className="homepagetestimony-card">
            <div className="homepagetestimony-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              "Professional, fast and reliable. They know Toyota vehicles inside
              out."
            </p>
            <div className="homepagetestimony-user">
              <img src={testimony1} alt="Sarah Williams" />
              <div>
                <h4>Sarah Williams</h4>
                <span>Toyota RAV4 Owner</span>
              </div>
            </div>
          </div>

          <div className="homepagetestimony-card">
            <div className="homepagetestimony-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              "Great customer service and genuine parts. I won't go anywhere
              else."
            </p>
            <div className="homepagetestimony-user">
              <img src={testimony2} alt="John Adekunle" />
              <div>
                <h4>John Adekunle</h4>
                <span>Toyota Camry Owner</span>
              </div>
            </div>
          </div>
        </div>

        <div className="homepagetestimony-cta">
          <h3>Need Your Car Serviced?</h3>
          <p>Book an appointment today and experience the best auto care.</p>
          <button>
            Book an Appointment
            <IoMdArrowForward className="homepagetestimony-cta-button-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
