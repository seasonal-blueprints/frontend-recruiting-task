import React from "react";
import "./App.css";
import { getPeriods } from "../../services/timePeriodService";
import { getStashawayReturns } from "../../services/stashawayReturnsService";
import { getMarketReturns } from "../../services/marketReturnsService";
import PeriodBar from "../PeriodBar/PeriodBar";
import CurrencyBar from "../CurrencyBar/CurrencyBar";
import Benchmark from "../Benchmark/Benchmark";
import Chart from "../Chart/Chart";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

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
