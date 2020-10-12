import React from 'react';
import './card.style.css';

export const Card = ({index, day, numberDays}) => (
  <div className='card-container'>
    {index <= numberDays && <img
      alt='obrázek'
      src={`https://source.unsplash.com/180x180/?christmas&sig=${index}`}
    />}
    <h2>{day}</h2>
  </div>
);
