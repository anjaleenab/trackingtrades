import React, {PureComponent} from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';


const data = function getData(props) {
  let stocks =[];

  for(let currentTrade =0; currentTrade <props.trades.length;currentTrade++) {
    if(stocks.some(stock => stock.name === props.trades[currentTrade]["Stock"]) {
      for(let currentStock=0;currentStock<trade.length;currentStock++) {
        if (stocks[currentStock[name]] === props.trades[currentTrade]["Stock"])) {
          trade.numberOfTrades++;
        }
      }
      else {
        let trade
      }
    }
  }
}


export default function PieChart(props) {

}
