import React, { useState } from 'react';

const useInputVal = initialVal => {
  const [value, setValue] = useState();
  return {
    value,
    onChange: event => setValue(event.target.value)
  };
};

export default function TradeInputRow(props) {
  const dateInput = useInputVal();
  const stockInput = useInputVal();
  const quantityInput = useInputVal();
  const boughtAtInput = useInputVal();
  const soldAtInput = useInputVal();
  const pAndLInput = useInputVal();
  return (
    <div className="data-row-input" key={props.id}>
      <input style={{ width: '10%' }}
        type="text" name="date" defaultValue={props.date} {...dateInput}></input>
      <input style={{ width: '15%' }}
        name="stock" defaultValue={props.stock} {...stockInput}></input>
      <input style={{ width: '15%' }}
        name="quantity" defaultValue={props.quantity} {...quantityInput}></input>
      <input style={{ width: '19%' }}
        name="boughtAt" defaultValue={props.boughtAt} {...boughtAtInput}></input>
      <input style={{ width: '19%' }}
        name="soldAt" defaultValue={props.soldAt} {...soldAtInput}></input>
      <input style={{ width: '19%' }}
        name="pAndL" defaultValue={props.pAndL} {...pAndLInput}></input>
    </div>
  );
}
