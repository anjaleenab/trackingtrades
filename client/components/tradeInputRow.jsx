import React, { useState } from 'react';

const useInputVal = (props, initialValue, tradeID) => {
  const [defaultValue, setValue] = useState(initialValue);
  return {
    defaultValue,
    onChange: event => {
      setValue(event.target.value);
      props.stateUpdate(tradeID);
    }
  };
};

export default function TradeInputRow(props) {
  const dateInput = useInputVal(props, props.date);
  const stockInput = useInputVal(props, props.stock);
  const quantityInput = useInputVal(props, props.quantity);
  const boughtAtInput = useInputVal(props, props.boughtAt);
  const soldAtInput = useInputVal(props, props.soldAt);
  const pAndLInput = useInputVal(props, props.pAndL);
  return (
    <div className="data-row-input" key={props.id}>
      <input style={{ width: '10%' }}
        type="text" name="date" defaultValue={props.date} {...dateInput}></input>
      <input style={{ width: '15%' }}
        type="text" name="stock" defaultValue={props.stock} {...stockInput}></input>
      <input style={{ width: '15%' }}
        type="text" name="quantity" defaultValue={props.quantity} {...quantityInput}></input>
      <input style={{ width: '19%' }}
        type="text" name="boughtAt" defaultValue={props.boughtAt} {...boughtAtInput}></input>
      <input style={{ width: '19%' }}
        type="text" name="soldAt" defaultValue={props.soldAt} {...soldAtInput}></input>
      <input style={{ width: '19%' }}
        type="text" name="pAndL" defaultValue={props.pAndL} {...pAndLInput}></input>
    </div>
  );
}
