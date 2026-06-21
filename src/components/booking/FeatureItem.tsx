import React from "react";
import "./featureitem.css";

export interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="feature-item">
      <span className="feature-item__icon">{icon}</span>

      <div className="feature-item__text">
        <h4 className="feature-item__title">{title}</h4>
        <p className="feature-item__description">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
