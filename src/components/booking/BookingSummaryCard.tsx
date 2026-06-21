import React from "react";
import SummaryRow from "./SummaryRow";
import type { SummaryRowProps } from "./SummaryRow";
import "./bookingsummarycard.css";

export interface BookingSummaryCardProps {
  title?: string;
  rows: Omit<SummaryRowProps, "key">[];
  duration: string;
  price: string;
  estimatedTotal: string;
  onContinue: () => void;
  continueLabel?: string;
  isContinueDisabled?: boolean;
}

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 8H13M13 8L9 4M13 8L9 12"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BookingSummaryCard: React.FC<BookingSummaryCardProps> = ({
  title = "Your Booking Summary",
  rows,
  duration,
  price,
  estimatedTotal,
  onContinue,
  continueLabel = "Continue",
  isContinueDisabled = false,
}) => {
  return (
    <div className="booking-summary-card">
      <h3 className="booking-summary-card__title">{title}</h3>

      <div className="booking-summary-card__rows">
        {rows.map((row, index) => (
          <SummaryRow key={index} {...row} />
        ))}
      </div>

      <div className="booking-summary-card__divider" />

      <div className="booking-summary-card__line-item">
        <span className="booking-summary-card__line-label">Est. Duration</span>
        <span className="booking-summary-card__line-value">{duration}</span>
      </div>

      <div className="booking-summary-card__line-item">
        <span className="booking-summary-card__line-label">Price</span>
        <span className="booking-summary-card__line-value">{price}</span>
      </div>

      <div className="booking-summary-card__total">
        <span className="booking-summary-card__total-label">
          Estimated Total
        </span>
        <span className="booking-summary-card__total-value">
          {estimatedTotal}
        </span>
      </div>

      <button
        type="button"
        className="booking-summary-card__continue-btn"
        onClick={onContinue}
        disabled={isContinueDisabled}
      >
        {continueLabel}
        <ArrowIcon />
      </button>
    </div>
  );
};

export default BookingSummaryCard;
