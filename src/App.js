import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { DAYS } from './constants';
import Snowfall from 'react-snowfall'

class App extends Component {
  state = {
    rerender: false
  }

  componentDidMount() {
    const today = new Date()
    const firstDecember = new Date('2020-10-01T00:00:00')
    const timestamp = (today - firstDecember) / 1000;
    const numberDay = Math.floor(timestamp / 86400);

    let arrayDaysNumber = []
    for(let i = 0; i < numberDay; i++){
      arrayDaysNumber.push(i)
    }
    console.log(arrayDaysNumber)
    this.setEventCalendar(arrayDaysNumber)
  }

  setEventCalendar = (indexes, isClickedPackage) => {
    let days = JSON.parse(localStorage.getItem("days") || "[]");
    if(!days.length) days = DAYS

    if(indexes.length > 0 && isClickedPackage) {
      indexes.forEach((i)=> {days[i].isClickedPackage = true })
    } else if(indexes.length > 0 ){
      indexes.forEach((i)=> {
        if(days[i]) {
          days[i].isPossibleOpen = true
        }  
     })
    }
    this.setState({rerender: true})
    localStorage.setItem("days", JSON.stringify(days))
  }
  

  render() {
    let days = JSON.parse(localStorage.getItem("days") || "[]"); 
    console.log(days)
    return (
      
      <div className='App'>
      <Snowfall />
        <h1>Adventní Kalendář</h1>
        <CardList days={days} setEventCalendar={this.setEventCalendar} />
      </div>
    );
  }
}

export default App;
