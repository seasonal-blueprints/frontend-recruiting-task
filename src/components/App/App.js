import React from "react";
import "./app.css";
import { getPeriods } from "../../services/timePeriodService";
import { getStashawayReturns } from "../../services/stashawayReturnsService";
import { getMarketReturns } from "../../services/marketReturnsService";
import PeriodBar from "../periodBar/periodBar";
import CurrencyBar from "../currencyBar/currencyBar";
import Benchmark from "../benchmark/benchmark";
import Chart from "../chart/chart";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

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
        {/* <h1>recruitment assignment</h1> */}
        <Navbar />
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
        <Chart
          stashawayReturns={this.state.stashawayReturns}
          marketReturns={this.state.marketReturns}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
