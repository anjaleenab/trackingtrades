import React from 'react';

export default class TradeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      this.props.trades.map(trade => {
        let id = trade['id'];
        let date = trade['Date'];
        let stock = trade['Stock'];
        let quantity = trade['Quantity'];
        let boughtAt = trade['Price-Bought'];
        let soldAt = trade['Price-Sold'];
        let pAndL = trade['Profit-Loss'];
        return (
          <div className="data-row-input" key={id}>
            <input id="dateInput" value={date}></input>
            <input id="stockInput" value={stock}></input>
            <input id="quantityInput" value={quantity}></input>
            <input id="boughtInput" value={boughtAt}></input>
            <input id="soldInput" value={soldAt}></input>
            <input id="pAndLInput" value={pAndL}></input>
          </div>
        );
      })
    );
  }
}
