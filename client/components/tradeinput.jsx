import React from 'react';

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
    console.log('mounted here is test: ' + this.props.trades);
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
            <input id="dateInput"
              onChange={event => this.change(event)} type="text" name="date" value={this.state.date} ></input>
            <input id="stockInput"
              name="stock" value={this.state.stock} onChange={event => this.change(event)}></input>
            <input id="quantityInput"
              name="quantity" value={this.state.quantity} onChange={event => this.change(event)}></input>
            <input id="boughtInput"
              name="boughtAt" value={this.state.boughtAt} onChange={event => this.change(event)}></input>
            <input id="soldInput"
              name="soldAt" value={this.state.soldAt} onChange={event => this.change(event)}></input>
            <input id="pAndLInput"
              name="pAndL" value={this.state.pAndL} onChange={event => this.change(event)}></input>
          </div>
        );
      })
    );
  }
}
