import React from 'react';

export default function TradeLog(props) {
  return (
    <div>
      <table>
        <tr>
          <th>Date</th>
          <th>Stock</th>
          <th>Quantity</th>
          <th>Price Bought</th>
          <th>Price Sold</th>
          <th>Profit/Loss</th>
        </tr>
      </table>
    </div>
  );
}
