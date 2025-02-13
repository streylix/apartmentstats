import React from "react";
import ProgressBar from './ProgressBar';

const StatDisplay = ({ label, rating, icon: Icon }) => {
  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    paddingBottom: '8px',
    marginBottom: '12px'
  };

  return (
    <div style={containerStyles}>
      <ProgressBar rating={rating} />
      <div className="flex items-center">
        <Icon size={24} className="mr-2 text-white" />
        <span className="text-xl text-white">{label}</span>
      </div>
    </div>
  );
};

export default StatDisplay