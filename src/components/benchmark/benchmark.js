import React from "react";

function Benchmark(props) {
  return (
    <div className="benchmark__container">
      <h2>Portfolio benchmark</h2>
      <div className="benchmark__left">
        <p className="benchmark__left__text">General Investing</p>
        <p className="benchmark__left__comparator">StashAway Risk Index 14%</p>
      </div>
      <div className="benchmark__vs">vs</div>
      <div className="benchmark__right">
        <select className="benchmark__right__text">
          <option>60% stocks, 40% bonds (VTSMX ETF)</option>
          <option>20% stocks, 80% bonds (VBMFX ETF)</option>
        </select>
      </div>
    </div>
  );
}

export default Benchmark;
