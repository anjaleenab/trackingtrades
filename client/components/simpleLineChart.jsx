import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label
} from 'recharts';

const GetDaysInbetween = (props, trade = 0) => {
  let day1;
  let day2;
  if (trade || trade === 0) {
    day1 = props.trades[trade]['Date'];
    day2 = props.trades[--trade]['Date'];
  }
  let firstDate = new Date(day1);
  let secondDate = new Date(day2);
  const timeInbetween = firstDate.getTime() - secondDate.getTime();
  const daysInbetween = timeInbetween / (1000 * 3600 * 24);
  return daysInbetween;
};

const GetLineChartData = props => {
  let tradeData = [];
  let tradeObj = {};
  let totalProfitAndLosses = 0;
  for (let trade = 0; trade < props.trades.length; trade++) {
    if (trade === 0) {
      tradeObj['Date'] = props.trades[trade]['Date'];
      tradeObj['DaysBetween'] = 0;
      tradeObj['TotalProfitAndLoss'] = 0;
    } else {
      tradeObj['Date'] = props.trades[trade]['Date'];
      tradeObj['DaysBetween'] = GetDaysInbetween(props, trade);
      totalProfitAndLosses += props.trades[trade]['Profit-Loss'];
      tradeObj['TotalProfitAndLoss'] = totalProfitAndLosses;
    }

    tradeData.push(tradeObj);
    tradeObj = {};
  }
  return tradeData;
};

export default function SimpleLineChart(props) {
  let data = GetLineChartData(props);
  let xAxisObj = { value: 'Date',
    position: 'insideBottom',
    offset: 0
  };
  let yAxisObj = { value: 'Profit And Loss',
    angle: 90,
    position: 'insideLeft'
  };
  return (
    <LineChart
      width={375}
      height={200}
      data={data}
      margin={{
        top: 10, right: 10, left: 0, bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Date">
        <Label {...xAxisObj} />
      </XAxis>
      <YAxis>
        <Label {...yAxisObj} />
      </YAxis>
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="TotalProfitAndLoss" stroke="#4e9525" activeDot={{ r: 8 }} />

    </LineChart>
  );
}
