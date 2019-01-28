import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

    sendFeedback = () => {
        console.log('submit clicked');
        
        axios.post('/feedback', this.props.reduxStore.collectSurveyReducer)
        .then(response => {
            this.props.history.push('/lastpage');
        }).catch(error => {
            alert('error in POST');
        });
    }

    render() {

        // conditional render
        let renderElement;
        if (this.props.reduxStore.collectSurveyReducer.comments !== ''){
            renderElement = <button onClick={this.sendFeedback}>submit</button>
        } else {
            renderElement = <button disabled>incomplete</button>
        }

        return (
            <div>
                <h2>Review Your Feedback</h2>
                {JSON.stringify(this.props.reduxStore.collectSurveyReducer)}
                <ul>
                    <li>Feelings: {this.props.reduxStore.collectSurveyReducer.feeling} </li>
                    <li>Understanding: {this.props.reduxStore.collectSurveyReducer.understanding}</li>
                    <li>Support: {this.props.reduxStore.collectSurveyReducer.support}</li>
                    <li>Comments: {this.props.reduxStore.collectSurveyReducer.comments}</li>
                </ul>
                <div>{renderElement}</div>
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
  });
export default connect(mapReduxStoreToProps)(Review);