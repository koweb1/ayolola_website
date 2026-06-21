import React from "react";
import "./bookingdetailsform.css";

export interface BookingDetails {
  fullName: string;
  email: string;
  phone: string;
  notes: string;
}

export interface BookingDetailsFormProps {
  details: BookingDetails;
  onChange: (details: BookingDetails) => void;
}

const BookingDetailsForm: React.FC<BookingDetailsFormProps> = ({
  details,
  onChange,
}) => {
  const handleChange =
    (field: keyof BookingDetails) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onChange({ ...details, [field]: e.target.value });
    };

  return (
    <div className="booking-details-form">
      <h2 className="booking-details-form__heading">Your Details</h2>
      <p className="booking-details-form__subheading">
        Tell us how to reach you about your appointment.
      </p>

      <div className="booking-details-form__field">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          value={details.fullName}
          onChange={handleChange("fullName")}
          placeholder="John Doe"
        />
      </div>

      <div className="booking-details-form__row">
        <div className="booking-details-form__field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={details.email}
            onChange={handleChange("email")}
            placeholder="john@example.com"
          />
        </div>

        <div className="booking-details-form__field">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            value={details.phone}
            onChange={handleChange("phone")}
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div className="booking-details-form__field">
        <label htmlFor="notes">Additional Notes (optional)</label>
        <textarea
          id="notes"
          rows={4}
          value={details.notes}
          onChange={handleChange("notes")}
          placeholder="Anything else we should know about your vehicle or issue?"
        />
      </div>
    </div>
  );
};

export default BookingDetailsForm;
