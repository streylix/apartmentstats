import React from "react";
import calculateColor from "../utils/CalculateColor";

const ProgressBar = ({ rating }) => {
    const ratingOutOfFive = Number(rating).toFixed(1);
    const completed = (rating / 5) * 100;
    
    const containerStyles = {
      height: 50,
      width: '50vh',
      backgroundColor: "#2A2A2A",
      borderRadius: 8,
      position: 'relative',
      overflow: 'hidden'
    };
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: calculateColor(rating),
      borderRadius: 'inherit',
      transition: 'width 0.5s ease-in-out, background-color 0.5s ease-in-out'
    };
  
    const labelStyles = {
      position: 'absolute',
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '20px',
      zIndex: 2
    };
  
    // Create divider lines
    const dividerLines = () => {
      const lines = [];
      for (let i = 1; i < 5; i++) {
        lines.push(
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${i * 20}%`,
              top: 0,
              height: '100%',
              width: '2px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              zIndex: 1
            }}
          />
        );
      }
      return lines;
    };
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles} />
        {dividerLines()}
        <span style={labelStyles}>{ratingOutOfFive}</span>
      </div>
    );
  };

  export default ProgressBar;