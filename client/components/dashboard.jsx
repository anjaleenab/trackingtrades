import React, { useState } from 'react';
import TradeLog from './tradelog';

export default function Dashboard(props) {
  const [tradeLogMode, setTradeLogMode] = useState(false);
  let component;
  if (tradeLogMode) {
    component = <TradeLog trades={props.trades} stateUpdate={props.stateUpdate} deleteTrades={props.deleteTrades}/>;
  } else {
    component = <main className="mainDashboard">
      <div className="topDash">
        <div className="stat1"></div>
        <div className="stat2"></div>
        <div className="stat3">
          <div>Number of Trades Logged:</div>
          <button onClick={() => { setTradeLogMode(true); }}>Enter a trade</button>
        </div>
      </div>
      <div className="bottomDash">
        <div className="stat4"></div>
        <div className="stat5"></div>
      </div>
    </main>;
  }
  return (
    component
  );
}
