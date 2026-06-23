import "./footerbrand.css";
import logo from "../../assets/logo.png";

export default function FooterBrand() {
  return (
    <div className="footer-brand">
      <div className="footer-brand-logo">
        <img src={logo} alt="Ayolola Motors Limited" />
        <div className="footer-brand-logo-text">
          <h4>AYOLOLA MOTORS LIMITED</h4>
          <span>Toyota & Volkswagen Specialists</span>
        </div>
      </div>
      <p className="footer-brand-description">
        We provide high-quality auto repair and maintenance services with
        precision and care.
      </p>
    </div>
  );
}
