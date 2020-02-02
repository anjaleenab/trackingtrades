import React, { useState } from 'react';
import TradeLogRow from './tradelogrow';
import TradeInput from './tradeinput';
import Header from './header';

export default function TradeLog(props) {
  const [editTrade, setEditTrade] = useState(false);
  const [deleteTrade, setDeleteTrade] = useState(false);
  const [enterTrade, setEnterTrade] = useState(false);
  return (
    <div>
      <Header status={true} />
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

      {editTrade || enterTrade
        ? <React.Fragment>
          <TradeInput trades={props.trades} edit={editTrade} delete={deleteTrade} stateUpdate={props.stateUpdate}
            tradesToDelete={props.tradesToDelete} setTradesForDelete={props.setTradesForDelete} />
          <div>

            {editTrade
              ? <div><button onClick={() => {
                props.addTrade();
              }}>Add Another Trade</button>
              <button onClick={() => {
                setEnterTrade(false);
                setEditTrade(false);
              }}>Confirm Addition</button>
              {!deleteTrade && !enterTrade ? <button onClick={() => { setDeleteTrade(true); }}>Delete A Trade</button> : null}
              {deleteTrade ? <button onClick={() => {
                props.deleteTrades();
                setEditTrade(false);
                setDeleteTrade(false);
              }}>Confirm Deletion</button> : null}
              <button onClick={() => { setEditTrade(false); }}>Save Edits
              </button></div> : null}
          </div>
        </React.Fragment>
        : null
      }
      {!props.trades.length
        ? <button onClick={() => {
          setEnterTrade(true);
          props.addTrade();
        }}>Add Trade</button> : null
      }
      {!editTrade && !enterTrade
        ? <button onClick={() => { setEditTrade(true); }}>Edit Trade
        </button>
        : null}
    </div>
  );
}
