import React, { useState } from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

// const data = [
//   {
//     name: 'Amount Of Goal', amountReached: 50, goal: 100, fill: '#4e9525'
//   }
// ];

const GetDaysInbetween = (props, trade = 0) => {
  let today = new Date();
  let dayFormat = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`;
  let day1 = props.trades[trade]['Date-Sold'];
  let firstDate = new Date(dayFormat);
  let secondDate = new Date(day1);
  const timeInbetween = firstDate.getTime() - secondDate.getTime();
  const daysInbetween = timeInbetween / (1000 * 3600 * 24);
  if (daysInbetween <= 7) {
    return true;
  } else {
    return false;
  }
};

function getGoalData(props) {
  let goalContainer = [];
  let goalObj = {};
  goalObj['Name'] = 'Amount Of Goal';
  let amountReached = 0;
  for (let trade = 0; trade < props.trades.length; trade++) {
    if (trade === 0) {
      goalObj['amountReached'] = 0;
    }
    if (GetDaysInbetween(props, trade)) {
      amountReached += props.trades[trade]['Profit-Loss'];
    }
  }
  goalObj['amountReached'] = amountReached;
  goalObj['goal'] = props.goal;
  goalObj.fill = '#4e9525';
  goalContainer.push(goalObj);
  return goalContainer;
}

function RadialChart({ props }) {
  const data = getGoalData(props);
  const range = data[0].goal;
  return (
    <RadialBarChart width={300} height={175} cx={150} cy={80} innerRadius={40} outerRadius={180} barSize={10} data={data}>
      <PolarAngleAxis type="number" domain={[0, range]} angleAxisId={0} tick={false} />
      <RadialBar minAngle={15} label={{ position: 'center', fill: '#000000' }} background clockWise dataKey="amountReached" />
    </RadialBarChart>
  );
}

export default function GoalStat(props) {
  const [goalMode, setGoalMode] = useState(false);
  const data = getGoalData(props);
  let declaration = `You have reached ${(data[0]['amountReached'] * 100) / data[0]['goal']}% of your goal of $${data[0]['goal']} this week`;
  if (goalMode) {
    return (
      <div className='newGoal'>
      Please input the amount that you would like your new goal to be:
        <div>
          <input></input>
        </div>
        <div>
          <button className="goalConfirmation-btn"
            onClick={() => setGoalMode(false)}>Confirm New Goal</button>
        </div>
      </div>
    );
  } else {
    return (
      <div id="goalPercent" className="goalPercentDiv">
        {declaration}
        <div>
          <button className="setGoal-btn"
            onClick={() => setGoalMode(true)}>Set New Goal</button>
        </div>
        <RadialChart props ={props} />
      </div>
    );
  }

}
