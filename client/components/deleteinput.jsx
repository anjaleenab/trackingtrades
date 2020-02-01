import React from 'react';

export default function DeleteInput(props) {
  return (
    <input id={'checkbox' + props.TradeID} type="checkbox" value={props.TradeID} onClick={event => {
      let tradesToDelete = [];
      if (document.getElementById('checkbox' + `${props.TradeID}`).checked) {
        tradesToDelete.push(parseInt(event.target.value));
        props.setTradesForDelete(tradesToDelete);
        tradesToDelete = [];
      } else {
        if (props.tradesToDelete.includes(event.target.value)) {
          let copyTradesToDelete = tradesToDelete.filter(trade => trade !== event.target.value);
          props.setTradesForDelete(copyTradesToDelete);
        }
      }
    }
    }
    ></input>
  );
}
