import React, { useState } from 'react';
import TradeLogRow from './tradelogrow';
import TradeInput from './tradeinput';

export default function TradeLog(props) {
  const [editTrade, setEditTrade] = useState(false);
  const [deleteTrade, setDeleteTrade] = useState(false);
  return (
    <div>
      <table className ="trades">
        <thead>
          {deleteTrade ? <tr className="headers-row">
            <th style={{ textAlign: 'end' }}>Date</th>
            <th style={{ textAlign: 'end' }}>Stock</th>
            <th style={{ textAlign: 'end' }}>Quantity</th>
            <th>Price Bought</th>
            <th>Price Sold</th>
            <th>Profit/Loss</th>
          </tr> : <tr className="headers-row">
            <th>Date</th>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Price Bought</th>
            <th>Price Sold</th>
            <th>Profit/Loss</th>
          </tr>}
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
          <TradeInput trades={props.trades} edit={editTrade} delete={deleteTrade} stateUpdate={props.stateUpdate}/>
          <div>
            <button onClick={() => { setEditTrade(false); }}>Save Edits
            </button>
            {!deleteTrade ? <button onClick={() => { setDeleteTrade(true); }}>Delete A Trade</button> : null }
            {deleteTrade ? <button onClick={() => {
              setDeleteTrade(false);
              props.deleteTrade();
            }}>Confirm Deletion</button> : null}
          </div>
        </React.Fragment>
        : null
      }
    </div>
  );
}
