import React from 'react';
import TradeInputRow from './tradeInputRow';

export default class TradeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      stock: '',
      quantity: '',
      boughtAt: '',
      soldAt: '',
      pAndL: ''
    };
    this.change = this.change.bind(this);
  }
  change(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  componentDidMount() {
    let originalVal = this.props.trades;
    this.setState({
      date: originalVal.date,
      stock: originalVal.stock,
      quantity: originalVal.quantity,
      boughtAt: originalVal.boughtAt,
      soldAt: originalVal.soldAt,
      pAndL: originalVal.pAndL
    });
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
          <TradeInputRow key={id} date={date} stock={stock} quantity={quantity} boughtAt={boughtAt}
            soldAt={soldAt} pAndL={pAndL} change={this.change}/>
        );
      })
    );
  }
}
