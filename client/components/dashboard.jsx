import React, { useState } from 'react';
import Header from './header';
import { Redirect } from 'react-router-dom';
import SimpleLineChart from './simpleLineChart';
import PieChart from './pieChart';
import DayTradesStat from './dayTradesStat';
import GoalStat from './goalStat';

export default function Dashboard(props) {
  const [tradeLogMode, setTradeLogMode] = useState(false);
  let component;
  if (tradeLogMode) {
    component = <Redirect to='tradeLog' />;
  } else {
    component = <main className="mainDashboard">
      <div className="topDash">
        <div className="stat1">
          <DayTradesStat trades={props.trades} holidays={props.holidays}/>
        </div>
        <div className="stat2">
          <GoalStat trades={props.trades} goal={props.goal} />
        </div>
        <div className="stat3">
          <div>Number of Trades Logged: {props.trades.length}</div>
          <div className="addTrade">
            <button className="enterTrade-btn" onClick={() => { setTradeLogMode(true); }}>
            Enter a trade</button>
          </div>
        </div>
      </div>
      <div className="bottomDash">
        <div className="stat4">
          <SimpleLineChart trades={props.trades} />
        </div>
        <div className="stat5">
          <PieChart trades={props.trades} />
        </div>
      </div>
    </main>;
  }
  return (
    <React.Fragment>
      <Header status={true} />
      {component}
    </React.Fragment>
  );
}
