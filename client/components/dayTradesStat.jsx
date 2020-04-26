import React from 'react';

// let user know if the market is open or closed based on date and dates of holidays
function getMarketStatus(props) {
  const dateToday = new Date();
  const weekDay = dateToday.getDay();
  let month = dateToday.getMonth() > 9 ? dateToday.getMonth() : `0${dateToday.getMonth()}`;
  console.log(dateToday);
  const dateFormatted = `${dateToday.getFullYear()}-${month}-${dateToday.getDate()}`;
  console.log(dateFormatted);
  // accounts for market being closed because of saturday or sunday
  // account for market being closed because of a holiday (includes first week day
  // before or after Christmas)
  console.log(props);
  if (weekDay === 6 || weekDay === 0) {
    return 'The market is closed today';
  } else {
    for (let holiday = 0; holiday < props.holidays.length; holiday++) {
      if (props.holidays['holiday']['date']['iso']) {
        console.log('test');
      }
    }
    return 'The market is open today';
  }

}

// // filters through trades to get the ones that are day trades
// function getDayTrades(trades) {
//   const dayTrades = trades.filter(trade => trades['Date-Bought'] === trades['Date-Sold']);
//   return dayTrades;
// }

// // loop through dayTrades and get a list of ones that are less than 5 days from today
// // will have to make a condition to make sure the days are less than 5 business days away from today

// function withinFiveDays() {
//   // get trades that are within five days from today
// }

// // NEED to calculate date + 5 days and format the value to match
// // the API's date value of "YEAR-MONTH-DAY"

export default function DayTradesStat(props) {
//   console.log(props);
//   let propHolidays = props.holidays['response']['holidays'];
//   console.log(propHolidays);
//   let holidayObjs = returnHolidayObjects(propHolidays);
//   console.log(holidayObjs);

  // let newYears = propHolidays['holidays']['date']['iso'];
  // console.log(newYears);
  // let NewYears =
  // let markedClosedDates=
  // ACCOUNT for Christmas (it may be observed the next week day or if it is on
  // a saturday it will be observed Friday, market will be closed.)

  let marketStat = getMarketStatus(props);
  console.log(props);
  return (
    <div>
      {marketStat}
    </div>
  );
}
