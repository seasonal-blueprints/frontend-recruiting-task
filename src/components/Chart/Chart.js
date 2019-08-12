import React from "react";
import "./Chart.css";
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryPortal,
  VictoryLabel,
  VictoryLegend,
  VictoryTooltip,
  VictoryVoronoiContainer
} from "victory";

const Chart = ({ stashawayReturns, marketReturns }) => {
  return (
    <div className="chart">
      <h3>Portfolio value based on gross returns</h3>
      <p>
        Gross returns and exchange rates as sourced from Bloomberg as of 2nd
        May 2019
      </p>
      <VictoryChart
        width={1200}
        height={400}
        containerComponent={<VictoryVoronoiContainer />}
        animate={{ duration: 500, easing: "circle" }}
      >
        <VictoryAxis
          style={{
            axisLabel: { color: "white" },
            ticks: { stroke: "white", size: 5 },
            tickLabels: { fontSize: 15, padding: 5, fill: "white" }
          }}
          tickLabelComponent={
            <VictoryPortal>
              <VictoryLabel />
            </VictoryPortal>
          }
        />
        <VictoryAxis
          dependentAxis
          tickValues={[50000, 100000, 150000, 200000, 250000, 300000]}
          tickLabelComponent={
            <VictoryPortal>
              <VictoryLabel />
            </VictoryPortal>
          }
          tickFormat={tick => `${tick.toLocaleString()}`}
          style={{
            axis: { stroke: "none", color: "white" },
            grid: { stroke: "#818e99", strokeWidth: 0.5 },
            tickLabels: { fontSize: 15, padding: 30, fill: "white" }
          }}
        />
        <VictoryLine
          interpolation="natural"
          labelComponent={<VictoryTooltip />}
          labels={datum => datum.y}
          style={{
            data: { stroke: "#11c8ff" },
            parent: { border: "1px solid #ccc" }
          }}
          data={stashawayReturns}
        />
        <VictoryLine
          interpolation="natural"
          labelComponent={<VictoryTooltip />}
          labels={datum => datum.y}
          style={{
            data: { stroke: "#ffde26" },
            parent: { border: "1px dashed #ccc" }
          }}
          data={marketReturns}
        />
        <VictoryLegend
          x={300}
          y={375}
          centerTitle
          orientation="horizontal"
          gutter={50}
          style={{
            border: { stroke: "none" },
            labels: { fontSize: 15, fill: "white" }
          }}
          data={[
            {
              name: "Stashaway Risk Index 14%",
              symbol: { fill: "#11c8ff", type: "minus" }
            },
            {
              name: "40% VTSMX (Stock) + 60% VBMFX (Bond)",
              symbol: { fill: "orange", type: "minus" }
            }
          ]}
        />
      </VictoryChart>
      <div className="abbreviation">
        <p>VTSMX - Vanguard Total Stock Market Index</p>
        <p>VTSMX - Vanguard Total Bond Market Index</p>
      </div>
    </div>
  );
};

export default Chart;
