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
    <>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <span className="relative inline-block">
            <span className="z-20 relative">Today in History</span>
            <div className="bg-indigo-300 absolute w-full h-2 bottom-0.5 z-10"></div>
          </span>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="font-medium text-indigo-600">Birth</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {todaysBirth && (
                  <p>
                    {todaysBirth.text} was born on {date}, {todaysBirth.year}
                  </p>
                )}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="font-medium text-indigo-600">Death</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {todaysDeath && (
                  <p>
                    {todaysDeath.text} died on {date}, {todaysDeath.year}
                  </p>
                )}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="font-medium text-indigo-600">Event</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {todaysEvent && (
                  <p>
                    Fun fact! On {date}, {todaysEvent.year}, {todaysEvent.text}
                  </p>
                )}
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="font-medium text-indigo-600">Learn More</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {url}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default SelectedDate;
