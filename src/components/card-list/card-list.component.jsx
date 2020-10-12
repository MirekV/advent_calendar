import React from 'react'
import './list.style.css'
import { Card } from '../card/card.component'

export const CardList = ({days, numberDays}) => (
    <div className="card-list">
        {days.map((day, index) => (
         <Card key={index} day={day} index={index} numberDays={numberDays} />
        ))}
    </div>
)
