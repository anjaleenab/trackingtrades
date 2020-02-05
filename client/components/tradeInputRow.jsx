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

// function showError() {
//   let width = event.target.getAttribute('style');
//   event.target.setAttribute('style', width + ' background-color: #FFA98F');
// }

// function validate(props, name) {
//   console.log(document.querySelector('input').getAttribute('style'));
//   let errorDiv = document.getElementById('errorMessage');
//   errorDiv.textContent = '';
//   if (!event.target.value) {
//     event.target.closest('.data-row-input').setAttribute('className', 'error');
//     showError();
//     // let width = event.target.getAttribute('style');
//     // event.target.setAttribute('style', width + ' background-color: #FFA98F');
//   } else {
//     if (name === 'Date') {
//       const date = new Date();
//       if (event.target.value.length === 10) {
//         const values = event.target.value.split('');
//         const numbers = values.map(value => {
//           if (value === '-' || value === '/') {
//             return typeof (value);
//           } else {
//             let validNum = /^[0-9]/;
//             let number = parseInt(value);
//             if (validNum.test(number)) {
//               return typeof (number);
//             } else {
//               errorDiv.textContent = 'Date must be in date format Ex: 01-01-' + date.getFullYear() +
//                 ' or Ex: 01/01/' + date.getFullYear();
//             }
//           }
//         });
//         let valid = ['number', 'number', 'string', 'number', 'number', 'string', 'number', 'number', 'number', 'number'];
//         if (numbers !== valid) {
//           errorDiv.textContent = 'Date must be in date format Ex: 01-01-' + date.getFullYear() +
//         ' or Ex: 01/01/' + date.getFullYear();
//         }
//       } else {
//       errorDiv.textContent = 'Date must be in date format Ex: 01-01-' + date.getFullYear() +
//         ' or Ex: 01/01/' + date.getFullYear();
//       showError();
//     }
//     console.log('here');
//     console.log(event.target.closest('.data-row-input'));
//     // console.log(event.target.closest('.data-row-input').setAttribute('className', 'error'));
//   }
// }

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
      <input style={props.date === '' ? { width: '10%', backgroundColor: '#FFA98F' } : { width: '10%' } }
        className={props.date === '' ? 'error' : ''}
        type="text" name="Date" defaultValue={props.date} {...dateInput}></input>
      <input style={props.stock === '' ? { width: '15%', backgroundColor: '#FFA98F' } : { width: '15%' }}
        className={props.stock === '' ? 'error' : ''}
        type="text" name="Stock" defaultValue={props.stock} {...stockInput}></input>
      <input style={props.quantity === '' ? { width: '15%', backgroundColor: '#FFA98F' } : { width: '15%' }}
        className={props.quantity === '' ? 'error' : ''}
        type="text" name="Quantity" defaultValue={props.quantity} {...quantityInput}></input>
      <input style={props.boughtAt === '' ? { width: '18.5%', backgroundColor: '#FFA98F' } : { width: '18.5%' }}
        className={props.boughtAt === '' ? 'error' : ''}
        type="text" name="Price-Bought" defaultValue={props.boughtAt} {...boughtAtInput}></input>
      <input style={props.soldAt === '' ? { width: '18.5%', backgroundColor: '#FFA98F' } : { width: '18.5%' }}
        className={props.soldAt === '' ? 'error' : ''}
        type="text" name="Price-Sold" defaultValue={props.soldAt} {...soldAtInput}></input>
      <input style={props.pAndL === '' ? { width: '18.5%', backgroundColor: '#FFA98F' } : { width: '18.5%' }}
        className={props.pAndL === '' ? 'error' : ''}
        type="text" name="Profit-Loss" defaultValue={props.pAndL} {...pAndLInput}></input>
    </div>
  );
}
