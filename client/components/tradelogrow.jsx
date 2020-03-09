import React from 'react';

export default function TradeLogRow(props) {
  return (
    props.trades.map(trade => {
      let id = trade['id'];
      let dateBought = trade['Date-Bought'];
      let dateSold = trade['Date-Sold'];
      let stock = trade['Stock'];
      let quantity = trade['Quantity'];
      let boughtAt = trade['Price-Bought'];
      let soldAt = trade['Price-Sold'];
      let pAndL = trade['Profit-Loss'];
      return (
        <tr className="data-row" key={id}>
          <td>{dateBought}</td>
          <td>{dateSold}</td>
          <td>{stock}</td>
          <td>{quantity}</td>
          <td>{boughtAt}</td>
          <td>{soldAt}</td>
          <td>{pAndL}</td>
        </tr>
      );
    })
  );
}
