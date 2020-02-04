import React, { useState } from 'react';
import DeleteInput from './deleteinput';

const useInputVal = (props, initialValue) => {
  const [defaultValue, setValue] = useState(initialValue);
  return {
    defaultValue,
    onChange: event => {
      setValue(event.target.value);
      props.stateUpdate(props.tradeID, event.target.name, event.target.value);
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
    <div className="data-row-input" key={props.id} id={'input' + props.tradeID}>
      {props.deleteRow ? <DeleteInput TradeID={props.tradeID} setTradesForDelete={props.setTradesForDelete}
        tradesToDelete={props.tradesToDelete} /> : null}
      <input style={{ width: '10%' }}
        type="text" name="Date" defaultValue={props.date} {...dateInput}></input>
      <input style={{ width: '15%' }}
        type="text" name="Stock" defaultValue={props.stock} {...stockInput}></input>
      <input style={{ width: '15%' }}
        type="text" name="Quantity" defaultValue={props.quantity} {...quantityInput}></input>
      <input style={{ width: '18.5%' }}
        type="text" name="Price-Bought" defaultValue={props.boughtAt} {...boughtAtInput}></input>
      <input style={{ width: '18.5%' }}
        type="text" name="Price-Sold" defaultValue={props.soldAt} {...soldAtInput}></input>
      <input style={{ width: '18.5%' }}
        type="text" name="Profit-Loss" defaultValue={props.pAndL} {...pAndLInput}></input>
    </div>
  );
}
