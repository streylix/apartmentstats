import React from "react";
import calculateColor from "../utils/CalculateColor";

const ProgressBar = ({ rating }) => {
  const ratingOutOfFive = Number(rating).toFixed(1);
  const completed = (rating / 5) * 100;

  return (
    <div className="progress-container">
      <div 
        className="progress-filler"
        style={{
          width: `${completed}%`,
          backgroundColor: calculateColor(rating)
        }}
      />
      {[1, 2, 3, 4].map((index) => (
        <div
          key={index}
          className="progress-divider"
          style={{ left: `${index * 20}%` }}
        />
      ))}
      <span className="progress-label">{ratingOutOfFive}</span>
    </div>
  );
};

export default ProgressBar;