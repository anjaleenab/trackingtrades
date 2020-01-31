import React from 'react';

export default function DeleteInput(props) {
  let tradesToDelete = [];
  return (
    <input id={'checkbox' + props.TradeID} type="checkbox" value={props.TradeID} onClick={event => {
      if (document.getElementById('checkbox' + `${props.TradeID}`).checked) {
        tradesToDelete.push(event.target.value);
        // pass function to update state, not just the array. then update state to array of trades here
      } else {
        let copyTradesToDelete = tradesToDelete.filter(trade => trade !== event.target.value);
        tradesToDelete = copyTradesToDelete;
      }
    }}></input>
  );
}
