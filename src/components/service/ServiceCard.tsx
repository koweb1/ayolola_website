import "./servicecard.css";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  services: string[];
}

export default function ServiceCard({
  icon,
  title,
  services,
}: ServiceCardProps) {
  return (
    <div className="service-card">
      <div className="service-card-icon">{icon}</div>

      <h3>{title}</h3>

      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>

      <button>Learn More →</button>
    </div>
  );
}
