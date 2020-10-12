import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      days: [
        "1. 12. 2020",
        "2. 12. 2020",
        "3. 12. 2020",
        "4. 12. 2020",
        "5. 12. 2020",
        "6. 12. 2020",
        "7. 12. 2020",
        "8. 12. 2020",
        "9. 12. 2020",
        "10. 12. 2020",
        "11. 12. 2020",
        "12. 12. 2020",
        "13. 12. 2020",
        "14. 12. 2020",
        "15. 12. 2020",
        "16. 12. 2020",
        "17. 12. 2020",
        "18. 12. 2020",
        "19. 12. 2020",
        "20. 12. 2020",
        "21. 12. 2020",
        "22. 12. 2020",
        "23. 12. 2020",
        "24. 12. 2020"
      ],
      numberDays: 0
    };
  }

  componentDidMount(){
    const today = new Date()
    const firstDecember = new Date('2020-10-01T00:00:00')
    const timestamp = (today - firstDecember) / 1000;
    const numberDays = Math.floor(timestamp / 86400);
    if(numberDays > 0 ){
      this.setState({numberDays})
    }
    
  }
  

  render() {
    const { days, numberDays  } = this.state;
    return (
      <div className='App snow'>
        <h1>Adventní Kalendář</h1>
        <CardList days={days} numberDays={numberDays} />
      </div>
    );
  }
}

export default App;
