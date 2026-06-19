import "./processstep.css";

interface ProcessStepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ProcessStep({
  number,
  icon,
  title,
  description,
}: ProcessStepProps) {
  return (
    <div className="process-step">
      <div className="process-step-circle">{icon}</div>

      <span>{number}</span>

      <div className="process-line"></div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}
