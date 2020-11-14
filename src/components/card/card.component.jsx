import React from 'react';
import './card.style.css';

export const Card = ({index,  day : { url, isClickedPackage, isPossibleOpen, date}, setEventCalendar, openPicture}) =>(
  <div className={isPossibleOpen || isClickedPackage ? 'card-container' : 'card-container-no-efect'}>
    {isClickedPackage && isPossibleOpen ?
      <img
        onClick={()=> openPicture(index)}
        alt='obrázek'
        src={require(`${url}`)}
        width="120" 
        height="120"
        style={{borderRadius: '5px'}}
      /> 
      : 
      !isClickedPackage && isPossibleOpen ?
    <div style={{width: '120px', height: '120px'}}>
      <div  onClick={()=> setEventCalendar([index], true)} id="circle">
        <div id="gift">
          <div id="ribbon"></div>
          <div id="giftbox"></div>
        </div>
      </div>
    </div>
    : 
    <div style={{width: '120px', height: '120px'}}>
      <div  id="">
        <div id="gift">
          <div id="ribbon"></div>
          <div id="giftbox"></div>
        </div>
      </div>
    </div>
    }
  </div>
);
