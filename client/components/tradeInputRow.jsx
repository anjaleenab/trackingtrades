import React from 'react';

export default function TradeInputRow(props) {
  return (
    <div className="data-row-input" key={props.id}>
      <input id="dateInput"
        onChange={event => props.change(event)} type="text" name="date" value={props.date} ></input>
      <input id="stockInput"
        name="stock" value={props.stock} onChange={event => props.change(event)}></input>
      <input id="quantityInput"
        name="quantity" value={props.quantity} onChange={event => props.change(event)}></input>
      <input id="boughtInput"
        name="boughtAt" value={props.boughtAt} onChange={event => props.change(event)}></input>
      <input id="soldInput"
        name="soldAt" value={props.soldAt} onChange={event => props.change(event)}></input>
      <input id="pAndLInput"
        name="pAndL" value={props.pAndL} onChange={event => props.change(event)}></input>
    </div>
  );
}
