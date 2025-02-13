import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  card: {
    container: {
      backgroundColor: '#111827',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'box-shadow 0.3s ease',
      ':hover': {
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }
    },
    imageWrapper: {
      position: 'relative',
      width: '100%'
    },
    image: {
      width: '100%',
      height: '256px',
      objectFit: 'cover',
      opacity: '0.8'
    },
    counter: {
      position: 'absolute',
      top: '8px',
      right: '8px',
      padding: '4px 12px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '9999px',
      fontSize: '14px',
      color: '#ffffff'
    },
    content: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '24px',
      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)'
    }
  },
  text: {
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '8px'
    },
    location: {
      color: '#d1d5db',
      marginBottom: '8px'
    },
    availability: {
      fontSize: '14px',
      color: '#9ca3af'
    }
  }
};

const ApartmentCard = ({ apartment }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/apartment/${apartment.id}`)}
      style={styles.card.container}
    >
      <div style={styles.card.imageWrapper}>
        <img 
          src={apartment.image} 
          alt={apartment.name}
          style={styles.card.image}
        />
        <div style={styles.card.counter}>
          {apartment.imageCount} of {apartment.totalImages}
        </div>
        
        <div style={styles.card.content}>
          <h2 style={styles.text.title}>{apartment.name}</h2>
          <p style={styles.text.location}>{apartment.location}</p>
          <p style={styles.text.availability}>
            {apartment.unitsAvailable} Units Available
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;