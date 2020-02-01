import React from 'react';
import LoginPage from './login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: [],
      toDelete: []
    };
    this.updateState = this.updateState.bind(this);
    this.deleteTrades = this.deleteTrades.bind(this);
    this.setTradesForDelete = this.setTradesForDelete.bind(this);
  }
  updateState(tradeID, valName, newVal) {
    let tradesCopy = Object.assign(this.state.trades);
    for (let key in tradesCopy) {
      if (tradesCopy[key]['ID'] === tradeID) {
        tradesCopy[key]['' + valName] = newVal;
      }
    }
    this.setState({
      trades: tradesCopy
    });
  }
  addTrade() {
    let initialTrades = Object.assign(this.state.trades);
    let initializer = initialTrades[initialTrades.length - 1]['ID'] + 1;
    const newTrade = {
      'ID': initializer,
      'Date': '',
      'Stock': '',
      'Quantity': '',
      'Price-Bought': '',
      'Price-Sold': '',
      'Profit-Loss': ''
    };
    initialTrades.push(newTrade);
    this.setState({
      trades: initialTrades
    });
  }
  setTradesForDelete(tradeIDList) {
    this.setState({
      toDelete: tradeIDList
    });
  }
  deleteTrades() {
    let tradesToDelete = Object.assign(this.state.toDelete);
    let tradesCopy = Object.assign(this.state.trades);
    let leftOverTrades = [];
    let tradeNumber = 0;
    while (tradeNumber < tradesToDelete.length) {
      for (let key in tradesCopy) {
        if (tradesCopy[key]['ID'] !== tradesToDelete[tradeNumber]) {
          leftOverTrades.push(tradesCopy[key]);
        }
      }
      tradeNumber++;
    }
    this.setState({
      trades: leftOverTrades
    });
  }
  render() {
    return (
      <LoginPage trades={this.state.trades} stateUpdate={this.updateState}
        deleteTrades={this.deleteTrades} setTradesForDelete={this.setTradesForDelete}
        tradesToDelete={this.state.toDelete}>
      </LoginPage>
    );
  }
}
