import React, { useState } from 'react';

const useInputVal = initialVal => {
  const [value, setValue] = useState(initialVal);

  return {
    value,
    onChange: event => setValue(event.target.value)
  };
};

export default function TradeInputRow(props) {
  const text = useInputVal(props[event.target.name]);
  return (
    <div className="data-row-input" key={props.id}>
      <input style={{ width: '10%' }}
        type="text" name="date" {...text}></input>
      <input style={{ width: '15%' }}
        name="stock" value={props.stock} onChange={event => props.change(event)}></input>
      <input style={{ width: '15%' }}
        name="quantity" value={props.quantity} onChange={event => props.change(event)}></input>
      <input style={{ width: '19%' }}
        name="boughtAt" value={props.boughtAt} onChange={event => props.change(event)}></input>
      <input style={{ width: '19%' }}
        name="soldAt" value={props.soldAt} onChange={event => props.change(event)}></input>
      <input style={{ width: '19%' }}
        name="pAndL" value={props.pAndL} onChange={event => props.change(event)}></input>
    </div>
  );
}
