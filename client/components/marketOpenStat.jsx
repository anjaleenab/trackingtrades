import React from 'react';

// let user know if the market is open or closed based on date and dates of holidays
function getMarketStatus(props) {
  const dateToday = new Date();
  const weekDay = dateToday.getDay();
  let month = dateToday.getMonth() > 9 ? dateToday.getMonth() : `0${dateToday.getMonth()}`;
  const dateFormatted = `${dateToday.getFullYear()}-${month}-${dateToday.getDate()}`;
  const closedStatement = 'The stock market is closed today';

  // accounts for market being closed because of saturday or sunday
  // account for market being closed because of a holiday (includes first week day
  // before or after Christmas)
  if (weekDay === 6 || weekDay === 0) {
    return closedStatement;
  } else {
    for (let holiday = 0; holiday < props.holidays.length; holiday++) {
      if (props.holidays[holiday]['date']['iso'] === dateFormatted) {
        return closedStatement;
      }
    }
    if (dateFormatted === `${dateToday.getFullYear()}-12-26` && weekDay === 1) {
      return closedStatement;
    } else if (dateFormatted === `${dateToday.getFullYear()}-12-24` && weekDay === 5) {
      return closedStatement;
    }
    return 'The market is open today';
  }

}

export default function MarketOpenStat(props) {

  let marketStat = getMarketStatus(props);

  return (
    <div className="marketStat">
      <div>{marketStat}</div>
    </div>
  );
}
