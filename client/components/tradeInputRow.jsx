import React, { useState } from 'react';
import DeleteInput from './deleteinput';
import Validate from './validate';

const useInputVal = (props, initialValue) => {
  const [defaultValue, setValue] = useState(initialValue);
  return {
    defaultValue,
    onChange: event => {
      setValue(event.target.value);
      props.stateUpdate(props.tradeID, event.target.name, event.target.value);
      Validate(props, event.target.name);
    }
  };
};

export default function TradeInputRow(props) {
  const dateBoughtInput = useInputVal(props, props.dateBought);
  const dateSoldInput = useInputVal(props, props.dateSold);
  const stockInput = useInputVal(props, props.stock);
  const quantityInput = useInputVal(props, props.quantity);
  const boughtAtInput = useInputVal(props, props.boughtAt);
  const soldAtInput = useInputVal(props, props.soldAt);
  const pAndLInput = useInputVal(props, props.pAndL);
  return (
    <div className="data-row-input" key={props.id} id={'input' + props.tradeID}>
      {props.deleteRow ? <DeleteInput TradeID={props.tradeID} setTradesForDelete={props.setTradesForDelete}
        tradesToDelete={props.tradesToDelete} /> : null}
      <input style={props.date === '' ? { width: '10%', backgroundColor: '#FFA98F' } : { width: '10%' } }
        className={props.date === '' ? 'error' : ''}
        type="text" name="Date-Bought" defaultValue={props.dateBought} {...dateBoughtInput}></input>
      <input style={props.date === '' ? { width: '10%', backgroundColor: '#FFA98F' } : { width: '10%' }}
        className={props.date === '' ? 'error' : ''}
        type="text" name="Date-Sold" defaultValue={props.dateBought} {...dateSoldInput}></input>
      <input style={props.stock === '' ? { width: '15%', backgroundColor: '#FFA98F' } : { width: '15%' }}
        className={props.stock === '' ? 'error' : ''}
        type="text" name="Stock" defaultValue={props.stock} {...stockInput}></input>
      <input style={props.quantity === '' ? { width: '15%', backgroundColor: '#FFA98F' } : { width: '15%' }}
        className={props.quantity === '' ? 'error' : ''}
        type="text" name="Quantity" defaultValue={props.quantity} {...quantityInput}></input>
      <input style={props.boughtAt === '' ? { width: '15%', backgroundColor: '#FFA98F' } : { width: '15%' }}
        className={props.boughtAt === '' ? 'error' : ''}
        type="text" name="Price-Bought" defaultValue={props.boughtAt} {...boughtAtInput}></input>
      <input style={props.soldAt === '' ? { width: '15%', backgroundColor: '#FFA98F' } : { width: '15%' }}
        className={props.soldAt === '' ? 'error' : ''}
        type="text" name="Price-Sold" defaultValue={props.soldAt} {...soldAtInput}></input>
      <input style={props.pAndL === '' ? { width: '15%', backgroundColor: '#FFA98F' } : { width: '15%' }}
        className={props.pAndL === '' ? 'error' : ''}
        type="text" name="Profit-Loss" defaultValue={props.pAndL} {...pAndLInput}></input>
    </div>
  );
}
