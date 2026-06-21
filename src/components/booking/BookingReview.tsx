import React from "react";
import "./bookingreview.css";

export interface BookingReviewProps {
  serviceName: string;
  date: string | null;
  time: string | null;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
}

const BookingReview: React.FC<BookingReviewProps> = ({
  serviceName,
  date,
  time,
  fullName,
  email,
  phone,
  notes,
}) => {
  return (
    <div className="booking-review">
      <h2 className="booking-review__heading">Review & Confirm</h2>
      <p className="booking-review__subheading">
        Double-check everything before confirming your appointment.
      </p>

      <div className="booking-review__section">
        <h3>Service</h3>
        <p>{serviceName}</p>
      </div>

      <div className="booking-review__section">
        <h3>Date & Time</h3>
        <p>{date && time ? `${date} at ${time}` : "Not selected"}</p>
      </div>

      <div className="booking-review__section">
        <h3>Contact Details</h3>
        <p>{fullName || "—"}</p>
        <p>{email || "—"}</p>
        <p>{phone || "—"}</p>
        {notes && <p className="booking-review__notes">{notes}</p>}
      </div>
    </div>
  );
};

export default BookingReview;
