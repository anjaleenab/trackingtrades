import React, { useState } from 'react';
import DeleteInput from './deleteinput';

const useInputVal = (props, initialValue) => {
  const [defaultValue, setValue] = useState(initialValue);
  return {
    defaultValue,
    onChange: event => {
      setValue(event.target.value);
      props.stateUpdate(props.tradeID, event.target.name, event.target.value);
      validate(props, props.name);
    }
  };
};

function validate(props, name) {
  if (!event.target.value || props.date === '') {
    console.log(event.target.closest('.data-row-input'));
    event.target.closest('.data-row-input').setAttribute('className', 'error');
    event.target.setAttribute('className', 'error');
    let width = event.target.getAttribute('style');
    event.target.setAttribute('style', width + ' background-color: red');
  } else {
    console.log('here');
    console.log(event.target.closest('.data-row-input'));
    // console.log(event.target.closest('.data-row-input').setAttribute('className', 'error'));
  }
}

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
      <input style={props.date === '' ? { width: '10%', backgroundColor: 'red' } : { width: '10%' }}
        type="text" name="Date" defaultValue={props.date} {...dateInput}></input>
      <input style={props.stock === '' ? { width: '15%', backgroundColor: 'red' } : { width: '15%' }}
        type="text" name="Stock" defaultValue={props.stock} {...stockInput}></input>
      <input style={props.quantity === '' ? { width: '15%', backgroundColor: 'red' } : { width: '15%' }}
        type="text" name="Quantity" defaultValue={props.quantity} {...quantityInput}></input>
      <input style={props.boughtAt === '' ? { width: '18.5%', backgroundColor: 'red' } : { width: '18.5%' }}
        type="text" name="Price-Bought" defaultValue={props.boughtAt} {...boughtAtInput}></input>
      <input style={props.soldAt === '' ? { width: '18.5%', backgroundColor: 'red' } : { width: '18.5%' }}
        type="text" name="Price-Sold" defaultValue={props.soldAt} {...soldAtInput}></input>
      <input style={props.pAndL === '' ? { width: '18.5%', backgroundColor: 'red' } : { width: '18.5%' }}
        type="text" name="Profit-Loss" defaultValue={props.pAndL} {...pAndLInput}></input>
    </div>
  );
}
