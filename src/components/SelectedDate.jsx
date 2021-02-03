import React from "react";

const SelectedDate = ({ date, url, births, deaths, events }) => {
  const todaysHappenings = (typeArr) => {
    if (!typeArr) return null;
    const randomArrPosition = Math.floor(Math.random() * typeArr.length);
    const pluckedPosition = typeArr[randomArrPosition];
    return { year: pluckedPosition.year, text: pluckedPosition.text };
  };

  const todaysDeath = todaysHappenings(deaths);
  const todaysBirth = todaysHappenings(births);
  const todaysEvent = todaysHappenings(events);

  return (
    <div>
      <ul>
        {todaysBirth && (
          <li>
            {todaysBirth.text} was born on {date}, {todaysBirth.year}
          </li>
        )}
        {todaysDeath && (
          <li>
            {todaysDeath.text} died on {date}, {todaysDeath.year}
          </li>
        )}
        {todaysEvent && (
          <li>
            Fun fact! On {date}, {todaysEvent.year}, {todaysEvent.text}
          </li>
        )}
        <li>
          Want to know what else happened on {date}? Visit: {url}
        </li>
      </ul>
    </div>
  );
};

export default SelectedDate;
