import React from "react";
import "./infobanner.css";

export interface InfoBannerProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoBanner: React.FC<InfoBannerProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="info-banner">
      <div className="info-banner__icon-wrapper">{icon}</div>

      <div className="info-banner__text">
        <h4 className="info-banner__title">{title}</h4>
        <p className="info-banner__description">{description}</p>
      </div>
    </div>
  );
};

export default InfoBanner;