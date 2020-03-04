import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './login';
import Dashboard from './dashboard';
import TradeLog from './tradelog';

// will need to sort trades by the date

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: [{
        'ID': 1,
        'Date': '01-22-2020',
        'Stock': 'MSFT',
        'Quantity': 20,
        'Price-Bought': 165,
        'Price-Sold': 166,
        'Profit-Loss': 20
      },
      {
        'ID': 2,
        'Date': '01-30-2020',
        'Stock': 'NUGT',
        'Quantity': 20,
        'Price-Bought': 165,
        'Price-Sold': 166,
        'Profit-Loss': 20
      },
      {
        'ID': 3,
        'Date': '01-31-2020',
        'Stock': 'APT',
        'Quantity': 20,
        'Price-Bought': 165,
        'Price-Sold': 166,
        'Profit-Loss': 20
      },
      {
        'ID': 4,
        'Date': '02-06-2020',
        'Stock': 'JNUG',
        'Quantity': 20,
        'Price-Bought': 165,
        'Price-Sold': 166,
        'Profit-Loss': 20
      }
      ],
      toDelete: []
    };
    this.updateState = this.updateState.bind(this);
    this.deleteTrades = this.deleteTrades.bind(this);
    this.setTradesForDelete = this.setTradesForDelete.bind(this);
    this.addTrade = this.addTrade.bind(this);
    this.checkForErrors = this.checkForErrors.bind(this);
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
    let initializer = initialTrades.length ? initialTrades[initialTrades.length - 1]['ID'] + 1 : 1;
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
    for (let key in tradesCopy) {
      if (!tradesToDelete.includes(parseInt(tradesCopy[key]['ID']))) {
        leftOverTrades.push(tradesCopy[key]);
      }
    }
    if (tradesToDelete) {
      this.setState({
        trades: leftOverTrades,
        toDelete: []
      });
    }
  }
  checkForErrors() {
    const errors = document.querySelectorAll('.error');

    if (errors.length === 0) {
      return true;
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component = {LoginPage} />
          <Route path='/dashboard' render={ () => <Dashboard trades={this.state.trades} /> } />
          <Route path='/tradeLog' render={ () => <TradeLog trades={this.state.trades} stateUpdate={this.updateState}
            deleteTrades={this.deleteTrades} setTradesForDelete={this.setTradesForDelete}
            tradesToDelete={this.state.toDelete} addTrade={this.addTrade} checkErrors={this.checkForErrors}/> } />
        </Switch>
      </Router>

    );
  }
}
