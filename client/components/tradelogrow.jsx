import React, { useState } from 'react';

export default function TradeLogRow(props) {
  const [editTrade, setEditTrade] = useState(false);
  return (
    props.trades.map(trade => {
      let id = trade['id'];
      let date = trade['Date'];
      let stock = trade['Stock'];
      let quantity = trade['Quantity'];
      let boughtAt = trade['Price-Bought'];
      let soldAt = trade['Price-Sold'];
      let pAndL = trade['Profit-Loss'];
      return (
        <tr className = "data-row" key={id}>
          <td>{date}</td>
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
