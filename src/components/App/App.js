import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Feelings from '../Feelings/Feelings.js';
import Understanding from '../Understanding/Understanding.js';
import ThirdPage from '../ThirdPage/ThirdPage.js';
import FourthPage from '../FourthPage/FourthPage.js';
import Review from '../Review/Review.js'
import Lastpage from '../Review/Lastpage.js';

// Connect Store
import {connect} from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.getFeedback();
  }

  // GET feedback from server
  getFeedback = () => {
    axios.get('/feedback').then(response => {
      // console.log(response.data);
      
      const action = {type: 'GET_DATA', payload: response.data}
      this.props.dispatch(action)
    })
  }


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
            <Route exact path="/review" component={Review} />
            <Route exact path="/lastpage" component={Lastpage} />
          </div>
        </Router>
      </div>
      
    );
  }
}



export default connect()(App);
