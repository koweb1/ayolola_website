import "./footerbottom.css";

export default function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-bottom">
      <p className="footer-bottom-copy">
        © {currentYear} Ayolola Motors Limited. All Rights Reserved.
      </p>
      <div className="footer-bottom-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <span className="footer-bottom-divider">|</span>
        <a href="/terms-and-conditions">Terms & Conditions</a>
      </div>
    </div>
  );
}
