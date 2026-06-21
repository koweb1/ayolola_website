import React from "react";
import "./servicecard.css";

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isSelected: boolean;
  onSelect: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  isSelected,
  onSelect,
}) => {
  return (
    <button
      type="button"
      className={`service-card ${isSelected ? "service-card--selected" : ""}`}
      onClick={onSelect}
      aria-pressed={isSelected}
    >
      <div className="service-card__top">
        <div className="service-card__icon-wrapper">{icon}</div>

        <span
          className={`service-card__indicator ${
            isSelected ? "service-card__indicator--selected" : ""
          }`}
        >
          {isSelected && (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6L5 9L10 3"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      </div>

      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
    </button>
  );
};

export default ServiceCard;
