import React from 'react';

export default function DeleteInput(props) {
  return (
    <input type="checkbox" value={props.TradeID} onClick={event => props.tradesToDelete.push(event.target.value)}></input>
  );
}
