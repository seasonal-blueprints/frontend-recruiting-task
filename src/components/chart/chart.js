import React from "react";
import "./chart.css";
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryPortal,
  VictoryLabel,
  VictoryLegend
} from "victory";

const Chart = ({ stashawayReturns, marketReturns }) => {
  return (
    <div className="chart">
      <h3>Portfolio value based on gross returns</h3>
      <p>
        Gross returns and exchange rates as sourced from Bloomberg as of 2nd May
        2019
      </p>
      <VictoryChart
        width={700}
        height={350}
        // domainPadding={{ x: [50, 0] }}
      >
        <VictoryAxis
          style={{
            axisLabel: { marginTop: 35, color: "white" },
            ticks: { stroke: "white", size: 5 },
            tickLabels: { fontSize: 10, padding: 5, fill: "white" }
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
          style={{
            axis: { stroke: "none", color: "white" },
            grid: { stroke: "#818e99", strokeWidth: 0.5 },
            tickLabels: { fontSize: 10, padding: 20, fill: "white" }
          }}
        />
        <VictoryLine
          interpolation="natural"
          style={{
            data: { stroke: "#11c8ff" },
            parent: { border: "1px solid #ccc" }
          }}
          data={stashawayReturns}
        />
        <VictoryLine
          interpolation="natural"
          style={{
            data: { stroke: "#ffde26" },
            parent: { border: "1px dashed #ccc" }
          }}
          data={marketReturns}
        />
        <VictoryLegend
          x={150}
          y={330}
          centerTitle
          orientation="horizontal"
          gutter={50}
          style={{
            border: { stroke: "none" },
            labels: { fontSize: 10, fill: "white" },
            stroke: "white"
          }}
          data={[
            {
              name: "Stashaway Risk Index 14%",
              symbol: { fill: "tomato", type: "minus" }
            },
            {
              name: "40% VTSMX (Stock) + 60% VBMFX (Bond)",
              symbol: { fill: "orange", type: "minus" }
            }
          ]}
        />
      </VictoryChart>
    </div>
  );
};

export default Chart;
