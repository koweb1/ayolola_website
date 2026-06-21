import React, { useState } from "react";
import BookingHero from "../components/booking/BookingHero";
import StepProgressBar, {
  type Step,
} from "../components/booking/StepProgressBar";
import ServiceSelectionPanel, {
  type ServiceOption,
} from "../components/booking/ServiceSelectionPanel";
import DateTimeSelector from "../components/booking/DateTimeSelector";
import BookingDetailsForm, {
  type BookingDetails,
} from "../components/booking/BookingDetailsForm";
import BookingReview from "../components/booking/BookingReview";
import BookingSummaryCard from "../components/booking/BookingSummaryCard";
import TrustFeaturesStrip from "../components/booking/TrustFeaturesStrip";
import { type FeatureItemProps } from "../components/booking/FeatureItem";
import NavBar from "../components/navbar";

/* ---- Inline icons (swap for your icon library if preferred) ---- */
const StethoscopeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path
      d="M4 4v5a4 4 0 008 0V4M8 19a3 3 0 100-6 3 3 0 000 6zM16 9v1a4 4 0 01-4 4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const WrenchIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path
      d="M14.7 6.3a4 4 0 10-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.2 2.2-2.8-2.8 2.2-2.2z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const DropletIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path
      d="M12 3s6 7 6 11a6 6 0 11-12 0c0-4 6-11 6-11z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ShieldCheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path
      d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const CarIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path
      d="M3 13l1.5-4.5A2 2 0 016.4 7h11.2a2 2 0 011.9 1.5L21 13M3 13v5a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-5M3 13h18"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="7" cy="17" r="1.5" />
    <circle cx="17" cy="17" r="1.5" />
  </svg>
);
const CalendarIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 10h18" strokeLinecap="round" />
  </svg>
);
const MapPinIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path
      d="M12 21s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9" r="2.3" />
  </svg>
);
const ClockIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ShieldIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path
      d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const TagIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path
      d="M20.6 11.6L12.4 3.4A2 2 0 0011 3H4v7a2 2 0 00.6 1.4l8.2 8.2a2 2 0 002.8 0l5-5a2 2 0 000-2.8z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="8" r="1.2" />
  </svg>
);
const HeadsetIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M4 14v-2a8 8 0 0116 0v2" strokeLinecap="round" />
    <rect x="2" y="14" width="4" height="6" rx="1.5" />
    <rect x="18" y="14" width="4" height="6" rx="1.5" />
    <path d="M20 20v1a3 3 0 01-3 3h-3" strokeLinecap="round" />
  </svg>
);
/* ------------------------------------------------------------ */

const steps: Step[] = [
  { id: 1, label: "Select Service", mobileLabel: "Service" },
  { id: 2, label: "Select Date & Time", mobileLabel: "Date & Time" },
  { id: 3, label: "Your Details", mobileLabel: "Details" },
  { id: 4, label: "Review & Confirm", mobileLabel: "Confirm" },
];

const services: ServiceOption[] = [
  {
    id: "auto-diagnosis",
    icon: <StethoscopeIcon />,
    title: "Auto Diagnosis",
    description: "Computerized diagnosis to find issues fast.",
  },
  {
    id: "repair",
    icon: <WrenchIcon />,
    title: "Repair",
    description: "Engine, transmission, brakes and more.",
  },
  {
    id: "servicing",
    icon: <DropletIcon />,
    title: "Servicing",
    description: "Regular maintenance to keep your car perfect.",
  },
];

const serviceDetails: Record<string, { duration: string; price: string }> = {
  "auto-diagnosis": { duration: "60 mins", price: "$49.00" },
  repair: { duration: "120 mins", price: "$120.00" },
  servicing: { duration: "90 mins", price: "$79.00" },
};

const features: FeatureItemProps[] = [
  {
    icon: <ClockIcon />,
    title: "Quick Booking",
    description: "Book in less than 2 minutes.",
  },
  {
    icon: <ShieldIcon />,
    title: "Expert Technicians",
    description: "Certified professionals you can trust.",
  },
  {
    icon: <TagIcon />,
    title: "Upfront Pricing",
    description: "No hidden fees, ever.",
  },
  {
    icon: <HeadsetIcon />,
    title: "Customer Support",
    description: "We're here to help you anytime.",
  },
];

const BookingPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedServiceId, setSelectedServiceId] =
    useState<string>("auto-diagnosis");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [details, setDetails] = useState<BookingDetails>({
    fullName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isConfirmed, setIsConfirmed] = useState(false);

  const selectedService = services.find((s) => s.id === selectedServiceId);
  const { duration, price } = serviceDetails[selectedServiceId];

  const canContinue = () => {
    if (currentStep === 1) return !!selectedServiceId;
    if (currentStep === 2) return !!selectedDate && !!selectedTime;
    if (currentStep === 3)
      return !!details.fullName && !!details.email && !!details.phone;
    return true;
  };

  const handleContinue = () => {
    if (!canContinue()) return;

    if (currentStep === steps.length) {
      setIsConfirmed(true);
      // wire up actual submission (API call) here later
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const continueLabel =
    currentStep === steps.length ? "Confirm Booking" : "Continue";

  return (
    <div className="booking-page">
      <NavBar />
      <BookingHero />

      <div className="booking-page__container">
        <div className="booking-page__card">
          <StepProgressBar steps={steps} currentStep={currentStep} />

          {isConfirmed ? (
            <div className="booking-page__confirmed">
              <h2>You're all set!</h2>
              <p>
                Thanks {details.fullName || "there"} — your{" "}
                {selectedService?.title} appointment
                {selectedDate && selectedTime
                  ? ` on ${selectedDate} at ${selectedTime}`
                  : ""}{" "}
                has been booked. We'll send a confirmation to {details.email}.
              </p>
            </div>
          ) : (
            <div className="booking-page__grid">
              <div className="booking-page__step-content">
                {currentStep === 1 && (
                  <ServiceSelectionPanel
                    services={services}
                    selectedServiceId={selectedServiceId}
                    onSelectService={setSelectedServiceId}
                    bannerIcon={<ShieldCheckIcon />}
                    bannerTitle="Quality Service. Honest Price."
                    bannerDescription="Our certified mechanics ensure the best care for your vehicle."
                  />
                )}

                {currentStep === 2 && (
                  <DateTimeSelector
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    onSelectDate={setSelectedDate}
                    onSelectTime={setSelectedTime}
                  />
                )}

                {currentStep === 3 && (
                  <BookingDetailsForm details={details} onChange={setDetails} />
                )}

                {currentStep === 4 && (
                  <BookingReview
                    serviceName={selectedService?.title ?? ""}
                    date={selectedDate}
                    time={selectedTime}
                    fullName={details.fullName}
                    email={details.email}
                    phone={details.phone}
                    notes={details.notes}
                  />
                )}

                {currentStep > 1 && (
                  <button
                    type="button"
                    className="booking-page__back-btn"
                    onClick={handleBack}
                  >
                    ← Back
                  </button>
                )}
              </div>

              <BookingSummaryCard
                rows={[
                  {
                    icon: <CarIcon />,
                    label: "Service",
                    value: selectedService?.title ?? "",
                  },
                  {
                    icon: <CalendarIcon />,
                    label: "Date & Time",
                    value:
                      selectedDate && selectedTime
                        ? `${selectedDate} at ${selectedTime}`
                        : "Not selected",
                    isMuted: !(selectedDate && selectedTime),
                  },
                  {
                    icon: <MapPinIcon />,
                    label: "Location",
                    value:
                      "Ayolola Motor's Ltd 129 Bode Thomas Street Surulere",
                  },
                ]}
                duration={duration}
                price={price}
                estimatedTotal={price}
                onContinue={handleContinue}
                continueLabel={continueLabel}
                isContinueDisabled={!canContinue()}
              />
            </div>
          )}
        </div>
      </div>

      <TrustFeaturesStrip features={features} />
    </div>
  );
};

export default BookingPage;
