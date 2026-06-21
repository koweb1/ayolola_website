import React from "react";
import FeatureItem, { type FeatureItemProps } from "./FeatureItem";
import "./trustfeaturesstrip.css";

export interface TrustFeaturesStripProps {
  features: FeatureItemProps[];
}

const TrustFeaturesStrip: React.FC<TrustFeaturesStripProps> = ({
  features,
}) => {
  return (
    <div className="trust-features-strip">
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default TrustFeaturesStrip;
