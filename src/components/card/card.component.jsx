import React from 'react';
import './card.style.css';

export const Card = ({index,  day : { url, isClickedPackage, isPossibleOpen, date}, setEventCalendar}) =>(
  <div className='card-container'>
    {isClickedPackage && isPossibleOpen ? <img
      alt='obrázek'
      src={require(`${url}`)}
      width="200" 
      height="200"
      style={{borderRadius: '5px'}}
    /> : !isClickedPackage && isPossibleOpen ? <div style={{width: '200px', height: '200px'}} onClick={()=> setEventCalendar([index], true)}>Klikni a otevři</div> : <div style={{width: '200px', height: '200px'}}>Zatím nemůžeš otevřít</div>
    }
    <h2>{date}</h2>
  </div>
);
