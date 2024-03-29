import React from "react";
import "./CurrencyBar.css";

const currencies = [{ currency: "SGD" }, { currency: "USD" }];

const CurrecyBar = ({ selectedCurrency, handleSelectCurrency }) => {
  const getClass = (currencyName, currency) => {
    if (currency === currencyName) return "selected";
    return "unselected";
  };
  return (
    <div className="currencyBar__container">
      {currencies.map(investment => {
        return (
          <button
            id={investment.currency}
            key={investment.currency}
            name="selectedCurrency"
            type="button"
            className={getClass(selectedCurrency, investment.currency)}
            onClick={(event) => handleSelectCurrency(event, investment.currency)}
          >
            {investment.currency}
          </button>
        );
      })}
    </div>
  );
};

export default CurrecyBar;
