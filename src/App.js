import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { DAYS } from './constants';
import Snowfall from 'react-snowfall'
import LightBox from './components/light-box'

class App extends Component {
  state = {
    rerender: false,
    photoIndex: '',
    isOpenPicture: false
  }

  componentDidMount() {
    const today = new Date()
    const firstDecember = new Date('2020-10-20T00:00:00')
    const timestamp = (today - firstDecember) / 1000;
    const numberDay = Math.floor(timestamp / 86400);

    let arrayDaysNumber = []
    for(let i = 0; i < numberDay; i++){
      arrayDaysNumber.push(i)
    }
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

  openPicture = (photoIndex) => {
    this.setState({photoIndex, isOpenPicture: true})
  }

  closePicture = () => {
    this.setState({isOpenPicture: false})
  }

  handleMovePrevRequest = (photoIndex, days) => {
    this.setState({
      photoIndex: (photoIndex + days.length - 1) % days.length,
    })
  }
  
  handleMoveNextRequest = (photoIndex, days) => {
    this.setState({
      photoIndex: (photoIndex + 1) % days.length,
    })
  }

  render() {
    let days = JSON.parse(localStorage.getItem("days") || "[]"); 
    const { isOpenPicture, photoIndex } = this.state
    let pictures = []
    days.forEach((day) => {
      if(day.isClickedPackage) pictures.push(day)
    })
    return (
      <div className='App'>
        <LightBox 
          isOpenPicture={isOpenPicture} 
          photoIndex={photoIndex} 
          days={pictures} 
          closePicture={this.closePicture} 
          handleMovePrevRequest={this.handleMovePrevRequest}
          handleMoveNextRequest={this.handleMoveNextRequest}
        />
        <Snowfall />
        <h1>Adventní Kalendář</h1>
        <CardList days={days} setEventCalendar={this.setEventCalendar} openPicture={this.openPicture} />
      </div>
    );
  }
}

export default App;
