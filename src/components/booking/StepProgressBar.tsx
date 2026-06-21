import React from "react";
import "./stepprogressbar.css";

export interface Step {
  id: number;
  label: string;
  mobileLabel?: string; // shorter version shown under 600px
}

export interface StepProgressBarProps {
  steps: Step[];
  currentStep: number;
}

const StepProgressBar: React.FC<StepProgressBarProps> = ({
  steps,
  currentStep,
}) => {
  return (
    <div className="step-progress-bar">
      {steps.map((step, index) => {
        const isActive = step.id === currentStep;
        const isCompleted = step.id < currentStep;
        const isLast = index === steps.length - 1;

        return (
          <div className="step-progress-bar__item" key={step.id}>
            <div className="step-progress-bar__node">
              <div
                className={`step-progress-bar__circle ${
                  isActive
                    ? "step-progress-bar__circle--active"
                    : isCompleted
                      ? "step-progress-bar__circle--completed"
                      : ""
                }`}
              >
                {step.id}
              </div>
              <span
                className={`step-progress-bar__label ${isActive ? "step-progress-bar__label--active" : ""}`}
              >
                <span className="step-progress-bar__label-full">
                  {step.label}
                </span>
                <span className="step-progress-bar__label-short">
                  {step.mobileLabel ?? step.label}
                </span>
              </span>
              {isActive && <span className="step-progress-bar__underline" />}
            </div>

            {!isLast && (
              <div
                className={`step-progress-bar__connector ${
                  isCompleted ? "step-progress-bar__connector--filled" : ""
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepProgressBar;
