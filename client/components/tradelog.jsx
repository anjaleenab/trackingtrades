import React, { useState } from 'react';
import TradeLogRow from './tradelogrow';
import TradeInput from './tradeinput';

export default function TradeLog(props) {
  const [editTrade, setEditTrade] = useState(false);
  const [deleteTrade, setDeleteTrade] = useState(false);
  const [enterTrade, setEnterTrade] = useState(false);
  const [isEditable, setEditable] = useState(false);

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
        {!editTrade && !enterTrade
          ? <tbody><TradeLogRow trades={props.trades} edit={editTrade} /></tbody>
          : null}
      </table>
      {!props.trades.length
        ? <button onClick={() => {
          setEnterTrade(true);
          props.addTrade();
        }}>Add Trade</button>
        : enterTrade ? null
          : null
      }
      { !editTrade && isEditable
        ? <button onClick={() => { setEditTrade(true); }}>Edit Trade
        </button>
        : null}
      {editTrade || enterTrade
        ? <React.Fragment>
          <TradeInput trades={props.trades} edit={editTrade} delete={deleteTrade} stateUpdate={props.stateUpdate}
            tradesToDelete={props.tradesToDelete} setTradesForDelete={props.setTradesForDelete} />
          <div>
            {editTrade ? <button onClick={() => { setEditTrade(false); }}>Save Edits
            </button> : enterTrade ? <button onClick={() => {
              setEnterTrade(false);
              setEditable(true);
            }}>Confirm Addition</button> : null}
            {!deleteTrade && !enterTrade ? <button onClick={() => { setDeleteTrade(true); }}>Delete A Trade</button> : null }
            {deleteTrade ? <button onClick={() => {
              props.deleteTrades();
              setDeleteTrade(false);
            }}>Confirm Deletion</button> : null}
          </div>
        </React.Fragment>
        : null
      }
    </div>
  );
}
