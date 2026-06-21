import React from "react";
import "./datetimeselector.css";

export interface DateTimeSelectorProps {
  selectedDate: string | null;
  selectedTime: string | null;
  onSelectDate: (date: string) => void;
  onSelectTime: (time: string) => void;
}

const dates = [
  { value: "2026-06-23", label: "Mon", day: "23" },
  { value: "2026-06-24", label: "Tue", day: "24" },
  { value: "2026-06-25", label: "Wed", day: "25" },
  { value: "2026-06-26", label: "Thu", day: "26" },
  { value: "2026-06-27", label: "Fri", day: "27" },
  { value: "2026-06-28", label: "Sat", day: "28" },
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

const DateTimeSelector: React.FC<DateTimeSelectorProps> = ({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
}) => {
  return (
    <div className="datetime-selector">
      <h2 className="datetime-selector__heading">Select Date & Time</h2>
      <p className="datetime-selector__subheading">
        Choose when you'd like to bring your car in.
      </p>

      <div className="datetime-selector__dates">
        {dates.map((d) => (
          <button
            key={d.value}
            type="button"
            className={`datetime-selector__date ${
              selectedDate === d.value
                ? "datetime-selector__date--selected"
                : ""
            }`}
            onClick={() => onSelectDate(d.value)}
          >
            <span className="datetime-selector__date-label">{d.label}</span>
            <span className="datetime-selector__date-day">{d.day}</span>
          </button>
        ))}
      </div>

      <h3 className="datetime-selector__time-heading">Available Times</h3>
      <div className="datetime-selector__times">
        {timeSlots.map((t) => (
          <button
            key={t}
            type="button"
            className={`datetime-selector__time ${
              selectedTime === t ? "datetime-selector__time--selected" : ""
            }`}
            onClick={() => onSelectTime(t)}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DateTimeSelector;
