import React from "react";
import "./summaryrow.css";

export interface SummaryRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  isMuted?: boolean; // for placeholder values like "Not selected"
}

const SummaryRow: React.FC<SummaryRowProps> = ({
  icon,
  label,
  value,
  isMuted = false,
}) => {
  return (
    <div className="summary-row">
      <div className="summary-row__left">
        <span className="summary-row__icon">{icon}</span>
        <span className="summary-row__label">{label}</span>
      </div>

      <span
        className={`summary-row__value ${
          isMuted ? "summary-row__value--muted" : ""
        }`}
      >
        {value}
      </span>
    </div>
  );
};

export default SummaryRow;
