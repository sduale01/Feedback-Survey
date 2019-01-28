import React, {Component} from 'react';
import {connect} from 'react-redux';

class Lastpage extends Component {

    // This will reset the form so new feedback can be filled out.
    handleReset = () => {
        console.log('leave new feedback clicked');
        
        const action = {type: 'RESET_FORM'}
        this.props.dispatch(action)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h1>Thank You!</h1>
                <button onClick={this.handleReset}>Leave New Feedback</button>
            </div>
        );
    }
}

export default connect()(Lastpage);