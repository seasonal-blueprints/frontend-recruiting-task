import React from "react";
import "./Benchmark.css";

const Benchmark = ({ selectedBenchmark, handleSelectBenchmark }) => {
  return (
    <div className="benchmark__container">
      <h2>Portfolio benchmark</h2>
      {/* <div className="benchMark__subContainer"> */}
      <div className="benchmark__left">
        <p className="benchmark__left__text">General Investing</p>
        <p className="benchmark__left__comparator">
          StashAway Risk Index 14%
        </p>
      </div>
      <div className="benchmark__right">
        <select
          className="benchmark__right__dropDown"
          id="setBenchmark"
          name="selectedBenchmark"
          value={selectedBenchmark}
          onChange={handleSelectBenchmark}
          required
        >
          <option value="">Which benchmark do you want to compare?</option>
          <option value="VTSMX ETF">60% stocks, 40% bonds (VTSMX ETF)</option>
          <option value="VBMFX ETF">20% stocks, 80% bonds (VBMFX ETF)</option>
        </select>
      </div>
      <div className="benchmark__vs">vs</div>
    </div>
    // </div>
  );
};

export default Benchmark;
