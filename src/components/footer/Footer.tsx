import "./footer.css";
import FooterBrand from "./FooterBrand";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterServices from "./FooterServices";
import FooterContact from "./FooterContact";
import FooterHours from "./FooterHours";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <FooterBrand />
          <FooterQuickLinks />
          <FooterServices />
          <FooterContact />
          <FooterHours />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}
