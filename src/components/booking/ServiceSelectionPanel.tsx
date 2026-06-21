import React from "react";
import ServiceCard from "./ServiceCard";
import InfoBanner from "./InfoBanner";
import "./serviceselectionpanel.css";

export interface ServiceOption {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ServiceSelectionPanelProps {
  heading?: string;
  subheading?: string;
  services: ServiceOption[];
  selectedServiceId: string;
  onSelectService: (id: string) => void;
  bannerIcon: React.ReactNode;
  bannerTitle: string;
  bannerDescription: string;
}

const ServiceSelectionPanel: React.FC<ServiceSelectionPanelProps> = ({
  heading = "What do you need help with?",
  subheading = "Choose the service you want to book.",
  services,
  selectedServiceId,
  onSelectService,
  bannerIcon,
  bannerTitle,
  bannerDescription,
}) => {
  return (
    <div className="service-selection-panel">
      <h2 className="service-selection-panel__heading">{heading}</h2>
      <p className="service-selection-panel__subheading">{subheading}</p>

      <div className="service-selection-panel__grid">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            isSelected={selectedServiceId === service.id}
            onSelect={() => onSelectService(service.id)}
          />
        ))}
      </div>

      <InfoBanner
        icon={bannerIcon}
        title={bannerTitle}
        description={bannerDescription}
      />
    </div>
  );
};

export default ServiceSelectionPanel;
