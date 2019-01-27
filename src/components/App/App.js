import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Feelings from '../Feelings/Feelings.js';
import Understanding from '../Understanding/Understanding.js';
import ThirdPage from '../ThirdPage/ThirdPage.js';
import FourthPage from '../FourthPage/FourthPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <div>
            <Route exact path="/" component={Feelings} />
            <Route exact path="/understanding" component={Understanding} />
            <Route exact path="/thirdpage" component={ThirdPage} />
            <Route exact path="/fourthpage" component={FourthPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
