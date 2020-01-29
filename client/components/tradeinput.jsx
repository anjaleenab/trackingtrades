import React from 'react';
import TradeInputRow from './tradeInputRow';

export default function TradeInput(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: '',
  //     stock: '',
  //     quantity: '',
  //     boughtAt: '',
  //     soldAt: '',
  //     pAndL: ''
  //   };
  //   this.change = this.change.bind(this);
  // }
  // change(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  //   console.log(event.target.name);
  // }
  // componentDidMount() {
  //   let originalVal = this.props.trades[0];
  //   this.setState({
  //     date: originalVal.date,
  //     stock: originalVal.stock,
  //     quantity: originalVal.quantity,
  //     boughtAt: originalVal.boughtAt,
  //     soldAt: originalVal.soldAt,
  //     pAndL: originalVal.pAndL
  //   });
  // }
  // render() {
  return (
    props.trades.map(trade => {
      let id = trade['ID'];
      let date = trade['Date'];
      let stock = trade['Stock'];
      let quantity = trade['Quantity'];
      let boughtAt = trade['Price-Bought'];
      let soldAt = trade['Price-Sold'];
      let pAndL = trade['Profit-Loss'];
      return (
        <TradeInputRow key={id} date={date} stock={stock} quantity={quantity} boughtAt={boughtAt}
          soldAt={soldAt} pAndL={pAndL}/>
      );
      // })
    // );
    }
    ));
}
