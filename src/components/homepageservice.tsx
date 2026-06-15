import "./homepageservice.css";
import { ScanSearch, Disc2, Snowflake } from "lucide-react";
import { IoMdArrowForward } from "react-icons/io";
import { TbEngine, TbAutomaticGearbox } from "react-icons/tb";
import { FaOilCan } from "react-icons/fa6";

export default function Homepageservice() {
  return (
    <div className="homepageservice-container">
      <h2>OUR SERVICES</h2>

      <div className="homepageservice-header">
        <h3>Complete Auto Care Under One Roof</h3>
        <p>
          From routine maintenance to complex repairs, we've got your Toyota and
          Volkswagen covered.
        </p>
        <button>
          View All Services
          <IoMdArrowForward className="homepageservice-header-button-icon" />
        </button>
      </div>

      <div className="homepageservice-grid">
        <div className="homepageservice-card">
          <ScanSearch />
          <h3>Diagnostics</h3>
          <p>Advanced computer diagnostics to find issues fast.</p>
        </div>

        <div className="homepageservice-card">
          <TbEngine />
          <h3>Engine Repair</h3>
          <p>Complete engine repair and performance tuning.</p>
        </div>

        <div className="homepageservice-card">
          <Disc2 />
          <h3>Brake Service</h3>
          <p>Brake inspection, repair and replacement.</p>
        </div>

        <div className="homepageservice-card">
          <Snowflake />
          <h3>AC Service</h3>
          <p>Cooling system diagnostics and air conditioning repairs.</p>
        </div>

        <div className="homepageservice-card">
          <FaOilCan />
          <h3>Oil Change</h3>
          <p>Oil change and routine maintenance services.</p>
        </div>

        <div className="homepageservice-card">
          <TbAutomaticGearbox />
          <h3>Transmission</h3>
          <p>Transmission inspection and repair specialists.</p>
        </div>
      </div>
    </div>
  );
}
