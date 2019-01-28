import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Feelings from '../Feelings/Feelings.js';
import Understanding from '../Understanding/Understanding.js';
import ThirdPage from '../ThirdPage/ThirdPage.js';
import FourthPage from '../FourthPage/FourthPage.js';

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
          </div>
        </Router>
        <h2>Review Your Feedback</h2>
        {JSON.stringify(this.props.reduxStore.formReducer)}
        <ul>
          <li>Feelings: {this.props.reduxStore.collectSurveyReducer.feeling} </li>
          <li>Understanding: {this.props.reduxStore.collectSurveyReducer.understanding}</li>
          <li>Support: {this.props.reduxStore.collectSurveyReducer.support}</li>
          <li>Comments: {this.props.reduxStore.collectSurveyReducer.comments}</li>
        </ul>
      </div>
    );
  }
}


const mapReduxStoreToProps = (reduxStore) => ({
  reduxStore
});
export default connect(mapReduxStoreToProps)(App);
