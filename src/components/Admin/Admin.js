import React, {Component} from 'react';
import {connect} from 'react-redux';
import FeedbackRow from './FeedbackRow.js'
import axios from 'axios';


class Admin extends Component {
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
            <div>
                {JSON.stringify(this.props.reduxStore.formReducer)}
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxStore.formReducer.map(feedRow => {
                            return <FeedbackRow getFeedback={this.getFeedback} feedRow={feedRow} />
                        })}
                        {/* <FeedbackRow /> */}
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(Admin);