import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

let data = [
  {
    time: 'Page A', uv: 4000, pv: 2400, amt: 2400
  },
  {
    time: 'Page B', uv: 3000, pv: 1398, amt: 2210
  },
  {
    time: 'Page C', uv: 2000, pv: 9800, amt: 2290
  },
  {
    time: 'Page D', uv: 2780, pv: 3908, amt: 2000
  },
  {
    time: 'Page E', uv: 1890, pv: 4800, amt: 2181
  },
  {
    time: 'Page F', uv: 2390, pv: 3800, amt: 2500
  },
  {
    time: 'Page G', uv: 3490, pv: 4300, amt: 2100
  }
];

// {time: Date,  amount: totalProfitAndLosses}

const GetDaysInbetween = (props, trade = 0) => {
  debugger;
  let day1;
  let day2;
  if (trade || trade === 0) {
    day1 = props.trades[trade]['Date'];
    day2 = props.trades[++trade]['Date'];
  }
  let firstDate = new Date(day1);
  let secondDate = new Date(day2);
  const timeInbetween = secondDate.getTime() - firstDate.getTime();
  const daysInbetween = timeInbetween / (1000 * 3600 * 24);
  return daysInbetween;
};

const GetLineChartData = props => {
  debugger;
  console.log(props);
  let tradeData = [];
  let tradeObj = {};
  let totalProfitAndLosses = 0;
  for (let trade = 0; trade < props.trades.length; trade++) {
    tradeObj['Date'] = new Date(props.trades[trade]['Date']);
    tradeObj['DaysBetween'] = GetDaysInbetween(props, trade);
    totalProfitAndLosses += props.trades[trade]['Profit-Loss'];
    tradeObj['TotalProfitAndLoss'] = totalProfitAndLosses;
    tradeData.push(tradeObj);
    tradeObj = {};
  }
  console.log(totalProfitAndLosses);
  console.log(tradeData);
  return tradeObj;
};

export default function SimpleLineChart(props) {
  data = GetLineChartData(props);
  return (
    <LineChart
      width={325}
      height={210}
      data={data}
      margin={{
        top: 10, right: 10, left: 0, bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#4e9525" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}
