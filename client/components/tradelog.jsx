import React, { useState } from 'react';
import TradeLogRow from './tradelogrow';

export default function TradeLog(props) {
  const [editTrade, setEditTrade] = useState(false);
  return (
    <div>
      <table className ="trades">
        <tr className="headers-row">
          <th>Date</th>
          <th>Stock</th>
          <th>Quantity</th>
          <th>Price Bought</th>
          <th>Price Sold</th>
          <th>Profit/Loss</th>
        </tr>
        <TradeLogRow trades={props.trades} edit={editTrade}/>
      </table>
      <button onClick={() => { setEditTrade(true); }}>Edit Trade
      </button>
    </div>
  );
}
