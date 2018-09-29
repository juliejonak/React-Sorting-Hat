import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Smoke from './Smoke';


class App extends Component {
  constructor(){
    super();
    this.state={
    };
  }

  enterClick = (event) => {
    event.preventDefault();
  }




  render() {
    return (
      <div className="App">
        <div>
          <Welcome />
        </div>
      </div>
    );
  }
}

export default App;
