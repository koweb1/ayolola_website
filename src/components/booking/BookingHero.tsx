import React from "react";
import "./bookinghero.css";
import heroImageDesktop from "../../assets/booking-hero-image.png";
import heroImageMobile from "../../assets/use.png";

export interface BookingHeroProps {
  eyebrowHighlight?: string;
  eyebrowRest?: string;
  title?: string;
  description?: string;
}

const BookingHero: React.FC<BookingHeroProps> = ({
  eyebrowHighlight = "Fast. Easy.",
  eyebrowRest = "Reliable.",
  title = "Book Your Service",
  description = "Schedule your auto service in just a few steps. We'll take care of your car like our own.",
}) => {
  return (
    <section className="booking-hero">
      <picture>
        <source media="(max-width: 768px)" srcSet={heroImageMobile} />
        <img src={heroImageDesktop} alt="" className="booking-hero__image" />
      </picture>

      <div className="booking-hero__content">
        <h1 className="booking-hero__title">{title}</h1>

        <p className="booking-hero__subtitle">
          <span className="booking-hero__subtitle-highlight">
            {eyebrowHighlight}
          </span>{" "}
          <span className="booking-hero__subtitle-rest">{eyebrowRest}</span>
        </p>

        <span className="booking-hero__divider" />

        <p className="booking-hero__description">{description}</p>
      </div>
    </section>
  );
};

export default BookingHero;
