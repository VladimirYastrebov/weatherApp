import React from "react";

export const DateDisplay = () => {
  const date = new Date();
  let dayOfWeeak = date.getDay();
  let month = date.getMonth();
  let day = date.getDate();
  let year = date.getFullYear();
  switch (dayOfWeeak) {
    case 0:
      dayOfWeeak = "Sunday";
      break;
    case 1:
      dayOfWeeak = "Monday";
      break;
    case 2:
      dayOfWeeak = "Tuseday";
      break;
    case 3:
      dayOfWeeak = "Wendseday";
      break;
    case 4:
      dayOfWeeak = "Thursday";
      break;
    case 5:
      dayOfWeeak = "Friday";
      break;
    case 6:
      dayOfWeeak = "Saturday";
      break;
  }

  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "Feabryary";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "Jully";
      break;
    case 7:
      month = "Augest";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }

  return (
    <>
      <h1>
        {dayOfWeeak}, {month} {day}, {year}
      </h1>
    </>
  );
};