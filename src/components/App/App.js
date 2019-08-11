import React from "react";
import "./app.css";
import { getPeriods } from "../../services/timePeriodService";
import { getStashawayReturns } from "../../services/stashawayReturnsService";
import { getMarketReturns } from "../../services/marketReturnsService";
import PeriodBar from "../periodBar/periodBar";
import CurrencyBar from "../currencyBar/currencyBar";

import {
  VictoryChart,
  VictoryLine,
  // VictoryTheme,
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
      stashawayReturns: [],
      marketReturns: []
    };
  }

  updateReturns = (period, currency) => {
    const newStashawayReturns = getStashawayReturns(period, currency);
    const newMarketReturns = getMarketReturns(period, currency);
    this.setState({
      stashawayReturns: newStashawayReturns,
      marketReturns: newMarketReturns
    });
  };

  componentDidMount() {
    const newPeriods = getPeriods();
    this.setState({ periods: newPeriods }, () => {
      this.updateReturns(
        this.state.selectedPeriod,
        this.state.selectedCurrency
      );
    });
  }

  handleSelectPeriod = periodName => {
    this.setState({ selectedPeriod: periodName }, () => {
      this.updateReturns(periodName, this.state.selectedCurrency);
    });
  };

  handleSelectCurrency = currency => {
    this.setState({ selectedCurrency: currency }, () => {
      this.updateReturns(this.state.selectedPeriod, currency);
    });
  };

  render() {
    return (
      <div className="App">
        <h1>recruitment assignment</h1>
        <PeriodBar
          selectedPeriod={this.state.selectedPeriod}
          periods={this.state.periods}
          handleSelectPeriod={this.handleSelectPeriod}
        />
        <CurrencyBar
          selectedCurrency={this.state.selectedCurrency}
          handleSelectCurrency={this.handleSelectCurrency}
        />
        <div className="chart">
          <VictoryChart
            // theme={VictoryTheme.material}
            width={700}
            height={350}
            // style={{ parent: { maxWidth: "90%" } }}
          >
            <VictoryAxis
              // tickValues={(1, 2, 3, 4, 5, 6, 7)}
              label="Time"
              style={{
                axisLabel: { marginTop: 35 }
              }}
            />
            <VictoryAxis
              dependentAxis
              // theme={VictoryTheme.material}
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
