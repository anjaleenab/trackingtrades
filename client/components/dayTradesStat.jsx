// import React from 'react';

// function returnHolidayObjects(propHolidays) {
//   let holidayObjectArray = [];
//   for (let holiday = 0; holiday < propHolidays.length; holiday++) {
//     debugger;
//     let currentHolidayName = propHolidays[holiday]['name'];
//     let currentHoliday = propHolidays[holiday];
//     let newYears, martinLutherKingDay, presidentsDay, memorialDay;
//     switch (currentHolidayName) {
//       case "New Year's Day":
//         newYears = currentHoliday;
//         holidayObjectArray.push(newYears);
//         break;
//       case 'Martin Luther King Jr. Day':
//         martinLutherKingDay = currentHoliday;
//         holidayObjectArray.push(martinLutherKingDay);
//         break;
//       case "President's Day":
//         presidentsDay = currentHoliday;
//         holidayObjectArray.push(presidentsDay);
//         break;
//       case 'Memorial Day':
//         memorialDay = currentHoliday;
//         holidayObjectArray.push(memorialDay);
//         break;
//     }
//   }
//   return holidayObjectArray;
// }

// use 2 for loops to compare each holiday's date with the date
// and dates between the date that is 5 days after the date
// function hasHoliday(propHolidays) {

//   for (let holiday = 0; holiday < propHolidays.length; holiday++) {

//   }
//   return holidayObjectArray;
// }

// NEED to calculate date + 5 days and format the value to match
// the API's date value of "YEAR-MONTH-DAY"

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
  console.log(props);
  return (
    null
  );
}
