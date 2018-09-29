import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Page2 from './components/Page2';
import Q1 from './components/Q1';


class App extends Component {

  constructor(){
    super();
    this.state={
      background: false,
      welcomeShow: false,
      start: false,
      q1: false,
    };
  }

  enterClick = (event) => {
    event.preventDefault();
    this.setState({
      welcomeShow: true,
      start: true,
      background: true,
    });
  }

  startQuiz = (event) => {
    event.preventDefault();
    this.setState({
      start: false,
      q1: true,
    });
  }


  render() {
    return (
      <div className={this.state.background ? 'Sorting' : 'App'}>
        <div>
          <Welcome show={this.state.welcomeShow} enterClick={this.enterClick}/>
          <Page2 start={this.state.start} startQuiz={this.startQuiz} />
          <Q1 q1={this.state.q1} />
        </div>
      </div>
    );
  }
}

export default App;
