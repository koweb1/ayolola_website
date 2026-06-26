import image from "../../assets/contacthero-background1.png";
import "./contacthero.css";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <img
        src={image}
        alt="Mechanic working on a car engine"
        className="contact-hero__image"
      />

      <div className="contact-hero__content">
        <p className="contact-hero__label">CONTACT US</p>

        <h1 className="contact-hero__heading">
          We're Here to Help You Keep Moving
        </h1>

        <p className="contact-hero__subtext">
          Have questions, need a quote, or want to book a service? Reach out to
          our team — we're always ready to assist.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
