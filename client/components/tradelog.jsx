import React, { useState } from 'react';
import TradeLogRow from './tradelogrow';
import TradeInput from './tradeinput';

export default function TradeLog(props) {
  const [editTrade, setEditTrade] = useState(false);
  return (
    <div>
      <table className ="trades">
        <thead>
          <tr className="headers-row">
            <th>Date</th>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Price Bought</th>
            <th>Price Sold</th>
            <th>Profit/Loss</th>
          </tr>
        </thead>

        {!editTrade
          ? <tbody><TradeLogRow trades={props.trades} edit={editTrade} /></tbody>
          : null}
      </table>
      {!editTrade
        ? <button onClick={() => { setEditTrade(true); }}>Edit Trade
        </button>
        : null}
      {editTrade
        ? <React.Fragment>
          <TradeInput trades={props.trades} edit={editTrade} stateUpdate={props.stateUpdate}/>
          <div>
            <button onClick={() => { setEditTrade(false); }}>Save Edits
            </button>
            <button>Delete A Trade</button>
          </div>
        </React.Fragment>
        : null
      }
    </div>
  );
}
