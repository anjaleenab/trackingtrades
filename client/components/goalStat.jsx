import React, { useState } from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

// use this radialChart to convey how much of goal user has reached.
// May have to add more to the data (amount that hasn't been met)
// see example: http://recharts.org/en-US/examples/SimpleRadialBarChart
// make new data function
const data = [
  {
    name: 'Amount Of Goal', amountReached: 50, goal: 100, fill: '#4e9525'
  }
];

// loop through data to get the data from the time period of the goal
// and add up the profit
// create an object like the one above and return it

// function getGoalData(props) {
//   for(let trade=0; trade<props.trades<trade++) {

//   }
// }

function RadialChart() {
  let range = data[0].goal;
  return (
    <RadialBarChart width={300} height={300} cx={150} cy={120} innerRadius={40} outerRadius={180} barSize={10} data={data}>
      <PolarAngleAxis type="number" domain={[0, range]} angleAxisId={0} tick={false} />
      <RadialBar minAngle={15} label={{ position: 'center', fill: '#000000' }} background clockWise dataKey="amountReached" />
    </RadialBarChart>
  );
}

export default function GoalStat(props) {
  const [goalMode, setGoalMode] = useState(false);
  if (goalMode) {
    return (
      null
    );
  } else {
    return (
      <div className="goalPercentDiv">
        <RadialChart />
      </div>
    );
  }

}

// You have reached 1% of your goal of $400 this week
//   <div>
//     <button className="setGoal-btn" onClick={() => setGoalMode(true)}>Set New Goal</button>
//   </div>
