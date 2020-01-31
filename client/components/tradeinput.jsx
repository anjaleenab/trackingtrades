import React from 'react';
import TradeInputRow from './tradeinputrow';

export default function TradeInput(props) {
  return (
    props.trades.map(trade => {
      let id = trade['ID'];
      let date = trade['Date'];
      let stock = trade['Stock'];
      let quantity = trade['Quantity'];
      let boughtAt = trade['Price-Bought'];
      let soldAt = trade['Price-Sold'];
      let pAndL = trade['Profit-Loss'];
      return (
        <TradeInputRow key={id} tradeID={id} date={date} stock={stock} quantity={quantity}
          boughtAt={boughtAt} soldAt={soldAt} pAndL={pAndL} stateUpdate={props.stateUpdate} deleteRow={props.delete}
        />
      );
    })
  );
}
