import React from 'react';

const Card = ({ value, text }) => {
  return (
    <div style={{ 
      width: '130px', 
      padding: '28px', 
      border: '1px solid #ccc', 
      color: '#000',
      transition: 'transform 0.2s ease-in-out',
      cursor: 'pointer',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      backgroundColor: '#fff',
      textAlign: 'center',
      }}>
      <div style={{ 
        display: 'flex', 
        width: '100%', 
        height: '100%', 
        flexDirection: 'column', 
        alignContent: 'flex-end', 
        alignItems: 'center', 
        flexWrap: 'nowrap', 
        justifyContent: 'center', 
        justifyItems: 'center',
        }}>
        <div style={{ 
          fontSize: '40px',
          marginBottom: '10px',
          }}>
          {value}
        </div>
        <div style={{ 
          fontSize: '24',
          }}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default Card;
