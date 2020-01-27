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
      }],
      loggedIn: false,
      tradeLogMode: false,
      editTrade: false
    };
  }
  render() {
    return (
      <LoginPage trades={this.state.trades}></LoginPage>
    );
  }
}
