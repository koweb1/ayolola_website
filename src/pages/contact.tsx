import NavBar from "../components/navbar";
import ContactHero from "../components/contact/ContactHero";
import ContactInfoBar from "../components/contact/ContactInfoBar";
import ContactFormMap from "../components/contact/ContactFormMap";
import EmergencyBanner from "../components/contact/EmergencyBanner";
import ServiceAreas from "../components/contact/ServiceAreas";
import OtherWaysToReach from "../components/contact/OtherWaysToReach";
import ContactFAQ from "../components/contact/ContactFAQ";
import WhyChooseUs from "../components/contact/WhyChooseUs";
import ContactCTA from "../components/contact/ContactCTA";
import Footer from "../components/footer/footer";
import "./contact.css";

const ContactPage = () => {
  return (
    <main className="contact-page">
      <NavBar />
      <ContactHero />
      <ContactInfoBar />
      <ContactFormMap />
      <EmergencyBanner />

      {/* 3-column section */}
      <div className="contact-three-col">
        <ServiceAreas />
        <OtherWaysToReach />
        <ContactFAQ />
      </div>

      <WhyChooseUs />
      <ContactCTA />
      <Footer />
    </main>
  );
};

export default ContactPage;
