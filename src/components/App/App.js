import React from 'react';
import './app.css';
import { getPeriods } from "../../services/timePeriodService"
import { getStashawayReturns } from "../../services/stashawayReturnsService"
import { getMarketReturns } from "../../services/marketReturnsService"
import PeriodBar from "../periodBar/periodBar"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      periods: [],
      selectedPeriod: "monthly",
      stashawayReturns: [],
      marketReturns: []
    };
  }

  componentDidMount(){
    this.setState({periods: getPeriods()});
    this.setState({stashawayReturns: getStashawayReturns(this.state.selectedPeriod)})
    this.setState({marketReturns: getMarketReturns(this.state.selectedPeriod)})
  }

  handlePeriodClick = (periodName) => {
    this.setState({selectedPeriod: periodName})
  }


  render() {
  return (
    <div className="App">
      <h1>recruitment assignment</h1>
      <PeriodBar selectedPeriod={this.state.selectedPeriod} periods={this.state.periods} handlePeriodClick={this.handlePeriodClick} />
    </div>
  );
  }
}

export default App;
