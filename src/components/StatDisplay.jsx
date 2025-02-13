import React from "react";
import ProgressBar from './ProgressBar';

const StatDisplay = ({ label, rating, icon: Icon }) => {
  return (
    <div className="stat-container">
      <ProgressBar rating={rating} />
      <div className="flex items-center">
        <Icon size={24} className="mr-2 text-white" />
        <span className="text-xl text-white">{label}</span>
      </div>
    </div>
  );
};

export default StatDisplay;