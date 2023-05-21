import React from 'react';
import './DisplayComponent.scss';

const DisplayComponent = ({ kilometers, target }) => {
  const calculateRemainingKilometers = () => {
    const remainingKilometers = target - kilometers;
    return remainingKilometers > 0 ? remainingKilometers : 0;
  };

  const calculateKilometersPerDay = () => {
    const currentDate = new Date();
    const currentDayOfYear = Math.floor(
      (currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
    );
    const totalDaysInYear = 365;
    const remainingDays = totalDaysInYear - currentDayOfYear;
    return remainingDays > 0 ? calculateRemainingKilometers() / remainingDays : 0;
  };

  const calculateKilometersPerWeek = () => {
    const currentDate = new Date();
    const currentWeekOfYear = Math.floor(
      (currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24 / 7
    );
    const totalWeeksInYear = 52;
    const remainingWeeks = totalWeeksInYear - currentWeekOfYear;
    return remainingWeeks > 0 ? calculateRemainingKilometers() / remainingWeeks : 0;
  };

  const calculateKilometersPerMonth = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const totalMonthsInYear = 12;
    const remainingMonths = totalMonthsInYear - currentMonth;
    return remainingMonths > 0 ? calculateRemainingKilometers() / remainingMonths : 0;
  };

  if (kilometers === null) {
    return null; // Render nothing if kilometers is null (no value entered)
  }

  return (
    <div className="display-container">
      <h2 className="display-title">Remaining Kilometers</h2>
      <p className="display-item">Kilometers to run per day: {calculateKilometersPerDay().toFixed(2)}</p>
      <p className="display-item">Kilometers to run per week: {calculateKilometersPerWeek().toFixed(2)}</p>
      <p className="display-item">Kilometers to run per month: {calculateKilometersPerMonth().toFixed(2)}</p>
    </div>
  );
};

export default DisplayComponent;
