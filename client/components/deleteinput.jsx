import React from 'react';

export default function DeleteInput(props) {
  return (
    <input type="checkbox" value={props.TradeID} onClick={ event => console.log(event.target.value)}></input>
  );
}
