import React, {Component} from 'react';
import { connect } from 'react-redux';

class Review extends Component {
    render() {
        return (
            <div>
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
export default connect(mapReduxStoreToProps)(Review);