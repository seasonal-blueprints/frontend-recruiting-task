import React from "react";
import "./app.css";
import { getPeriods } from "../../services/timePeriodService";
import { getStashawayReturns } from "../../services/stashawayReturnsService";
import { getMarketReturns } from "../../services/marketReturnsService";
import PeriodBar from "../periodBar/periodBar";
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from "victory";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      periods: [],
      selectedPeriod: "1 month",
      stashawayReturns: [],
      marketReturns: []
    };
  }

  updateReturns = () => {
    const newStashawayReturns = getStashawayReturns(this.state.selectedPeriod);
    const newMarketReturns = getMarketReturns(this.state.selectedPeriod);
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

  handleSelectPeriod = periodName => {
    this.setState({ selectedPeriod: periodName }, () => {
      this.updateReturns();
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
        <div className="chart">
          <VictoryChart theme={VictoryTheme.material}>
            <VictoryLine
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc" }
              }}
              data={this.state.stashawayReturns}
            />
            <VictoryLine
              style={{
                data: { stroke: "#c43a41" },
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
