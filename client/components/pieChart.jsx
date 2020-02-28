import React, {PureComponent} from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';

function getData(props) {
  let stocks = [];

  for (let currentTrade = 0; currentTrade < props.trades.length; currentTrade++) {
    if (stocks.some(stock => stock.name === props.trades[currentTrade]['Stock'])) {
      for (let currentStock = 0; currentStock < stocks.length; currentStock++) {
        if (stocks[currentStock]['name'] === props.trades[currentTrade]['Stock']) {
          stocks[currentStock].numberOfTrades++;
        }
      }
    } else {
      let currentStock = {
        'name': props.trades[currentTrade]['Stock'],
        'numberOfTrades': 1
      };
      stocks.push(currentStock);
    }
  }
  return stocks;
}

export default function SimplePieChart(props) {
  getData(props);
  return (
    null
  );
}
