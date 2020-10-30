import React from 'react'
import './list.style.css'
import { Card } from '../card/card.component'

export const CardList = ({days, setEventCalendar, openPicture}) => (
    <div className="card-list">
        {days.map((day, index) => (
         <Card key={index} day={day} index={index} setEventCalendar={setEventCalendar} openPicture={openPicture} />
        ))}
    </div>
)
