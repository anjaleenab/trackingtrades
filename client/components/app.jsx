import React from 'react';
import LoginPage from './login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: [{
        'ID': 1,
        'Date': '01-22-2020',
        'Stock': 'MSFT',
        'Quantity': 20,
        'Price-Bought': 165.72,
        'Price-Sold': 166.01,
        'Profit-Loss': 5.80
      },
      {
        'ID': 2,
        'Date': '01-22-2020',
        'Stock': 'ROKU',
        'Quantity': 20,
        'Price-Bought': 165.72,
        'Price-Sold': 166.01,
        'Profit-Loss': 5.80
      }],
      toDelete: []
    };
    this.updateState = this.updateState.bind(this);
    this.deleteTrades = this.deleteTrades.bind(this);
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
  deleteTrades() {
    let tradesToDelete = Object.assign(this.state.trades.toDelete);
    let tradesCopy = Object.assign(this.state.trades);
    let leftOverTrades = [];
    // let tradeNumber = 0;
    // while (tradeNumber < tradesToDelete.length) {
    //   for (let key in tradesCopy) {
    //     if (tradesCopy[key]['ID'] !== tradesToDelete[tradeNumber]) {
    //       leftOverTrades.push(tradesCopy[key]);
    //     }
    //   }
    //   tradeNumber++;
    // }
    leftOverTrades = tradesToDelete.filter(tradeID => tradesCopy['ID'] !== tradeID);
    this.setState({
      trades: leftOverTrades
    });
  }
  render() {
    return (
      <LoginPage trades={this.state.trades} stateUpdate={this.updateState}
        deleteTrades={this.deleteTrades} tradesForDelete={this.tradesToDelete}> </LoginPage>
    );
  }
}
