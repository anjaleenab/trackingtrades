import React from 'react';
import TradeInput from './tradeinput';

export default function TradeLogRow(props) {
  return (
    props.trades.map(trade => {
      let id = trade['id'];
      let date = trade['Date'];
      let stock = trade['Stock'];
      let quantity = trade['Quantity'];
      let boughtAt = trade['Price-Bought'];
      let soldAt = trade['Price-Sold'];
      let pAndL = trade['Profit-Loss'];
      if (!props.edit) {
        return (
          <tr className="data-row" key={id}>
            <td>{date}</td>
            <td>{stock}</td>
            <td>{quantity}</td>
            <td>{boughtAt}</td>
            <td>{soldAt}</td>
            <td>{pAndL}</td>
          </tr>
        );
      } else {
        return (
          <TradeInput/>
        );
      }

    })
  );
}
