import "./testimonialcard.css";
import { FaStar } from "react-icons/fa";

interface TestimonialCardProps {
  image: string;
  name: string;
  vehicle: string;
  review: string;
}

export default function TestimonialCard({
  image,
  name,
  vehicle,
  review,
}: TestimonialCardProps) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

      <p className="testimonial-review">"{review}"</p>

      <div className="testimonial-user">
        <img src={image} alt={name} />

        <div>
          <h4>{name}</h4>
          <span>{vehicle}</span>
        </div>
      </div>
    </div>
  );
}
