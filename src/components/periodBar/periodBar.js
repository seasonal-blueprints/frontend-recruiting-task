import React from "react"
import './periodBar.css';

const PeriodBar = ({selectedPeriod, periods, handlePeriodClick}) => {
    const getClass = (periodName, period) => {
        if (period.name === periodName) return "selected"
    return "unselected"

    }
    return (
        <div className="periodBar__container">
            {periods.map(period => {
                return <button id={period.name} key={period._id} type="button" className={getClass(selectedPeriod, period)}  onClick={() => handlePeriodClick(period.name)}>
                    {period.name}
                </button>
            })}
        </div>
    );
};

export default PeriodBar;