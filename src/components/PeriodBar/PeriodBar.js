import React from "react";
import "./PeriodBar.css";

const PeriodBar = ({ selectedPeriod, periods, handleSelectPeriod }) => {
  const getClass = (periodName, period) => {
    if (period.name === periodName) return "selected";
    return "unselected";
  };
  return (
    <div className="periodBar__container">
      {periods.map(period => {
        return (
          <button
            id={period._id}
            key={period._id}
            name="selectedPeriod"
            type="button"
            className={getClass(selectedPeriod, period)}
            onClick={event => handleSelectPeriod(event, period.name)}
          >
            {period.name}
          </button>
        );
      })}
    </div>
  );
};

export default PeriodBar;
