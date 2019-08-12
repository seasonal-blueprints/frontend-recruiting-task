import React from "react";
import "./app.css";
import { getPeriods } from "../../services/timePeriodService";
import { getStashawayReturns } from "../../services/stashawayReturnsService";
import { getMarketReturns } from "../../services/marketReturnsService";
import PeriodBar from "../periodBar/periodBar";
import CurrencyBar from "../currencyBar/currencyBar";
import Benchmark from "../benchmark/benchmark";

import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryPortal,
  VictoryLabel
} from "victory";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      periods: [],
      selectedPeriod: "1 month",
      selectedCurrency: "SGD",
      selectedBenchmark: "",
      stashawayReturns: [],
      marketReturns: []
    };
  }

  updateReturns = () => {
    const newStashawayReturns = getStashawayReturns(
      this.state.selectedPeriod,
      this.state.selectedCurrency
    );
    const newMarketReturns = getMarketReturns(
      this.state.selectedPeriod,
      this.state.selectedCurrency,
      this.state.selectedBenchmark
    );
    this.setState({
      stashawayReturns: newStashawayReturns,
      marketReturns: newMarketReturns
    });
  };

  componentDidMount() {
    const newPeriods = getPeriods();
    this.setState({ periods: newPeriods }, () => {
      this.updateReturns();
    });
  }

  handleSelectOption = (event, option) => {
    this.setState({ [event.target.name]: option }, () => {
      this.updateReturns();
    });
  };

  handleSelectBenchmark = event => {
    this.setState({ selectedBenchmark: event.target.value }, () => {
      this.updateReturns();
    });
  };

  render() {
    return (
      <div className="App">
        <h1>recruitment assignment</h1>
        <Benchmark
          selectedBenchmark={this.state.selectedBenchmark}
          handleSelectBenchmark={this.handleSelectBenchmark}
        />
        <PeriodBar
          selectedPeriod={this.state.selectedPeriod}
          periods={this.state.periods}
          handleSelectPeriod={this.handleSelectOption}
        />
        <CurrencyBar
          selectedCurrency={this.state.selectedCurrency}
          handleSelectCurrency={this.handleSelectOption}
        />
        <div className="chart">
          <VictoryChart width={700} height={350}>
            <VictoryAxis
              label="Time"
              style={{
                axisLabel: { marginTop: 35 }
              }}
              tickLabelComponent={
                <VictoryPortal>
                  <VictoryLabel />
                </VictoryPortal>
              }
            />
            <VictoryAxis
              dependentAxis
              tickLabelComponent={
                <VictoryPortal>
                  <VictoryLabel />
                </VictoryPortal>
              }
              label="Returns in dollars"
              style={{
                axisLabel: { marginTop: 35 },
                grid: { stroke: 0.5 },
                ticks: { stroke: "grey", size: 5 },
                tickLabels: { fontSize: 15, padding: 5 }
              }}
            />
            <VictoryLine
              interpolation="natural"
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc" }
              }}
              data={this.state.stashawayReturns}
            />
            <VictoryLine
              interpolation="natural"
              style={{
                data: { stroke: "rgb(129, 129, 255)" },
                parent: { border: "1px dashed #ccc" }
              }}
              data={this.state.marketReturns}
            />
          </VictoryChart>
        </div>
      </div>
    );
  }
}

export default App;
