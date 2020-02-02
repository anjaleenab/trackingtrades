import React from 'react';

export default function DeleteInput(props) {
  return (
    <input id={'checkbox' + props.TradeID} type="checkbox" value={props.TradeID} onClick={event => {
      let tradesToDelete = Object.assign(props.tradesToDelete);
      if (document.getElementById('checkbox' + `${props.TradeID}`).checked) {
        tradesToDelete.push(parseInt(event.target.value));
        props.setTradesForDelete(tradesToDelete);
      } else {
        if (props.tradesToDelete.includes(parseInt(event.target.value))) {
          let copyTradesToDelete = tradesToDelete.filter(trade => trade !== parseInt(event.target.value));
          props.setTradesForDelete(copyTradesToDelete);
        }
      }
    }
    }
    ></input>
  );
}
