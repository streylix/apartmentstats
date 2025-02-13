import React from 'react';
import { useNavigate } from 'react-router-dom';

const ApartmentCard = ({ apartment }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/apartment/${apartment.id}`)}
      className="apartment-card"
    >
      <div className="card-image-wrapper">
        <img 
          src={apartment.image} 
          alt={apartment.name}
          className="card-image"
        />
        <div className="card-counter">
          {apartment.imageCount} of {apartment.totalImages}
        </div>
        
        <div className="card-content">
          <h2 className="card-title">{apartment.name}</h2>
          <p className="card-location">{apartment.location}</p>
          <p className="card-availability">
            {apartment.unitsAvailable} Units Available
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;