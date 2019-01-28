import React, {Component} from 'react';
import Review from '../Review/Review.js'
import {connect} from 'react-redux';

class ThirdPage extends Component {
    constructor() {
        super();
        this.state = {
            support: 0,
        }
    }

    // changes state when input field is filled
    handleInputChange = (event) => {
        this.setState({
            support: event.target.value
        });
    }

    // runs when next button is clicked.
    handleNextButton = () => {
        console.log('next btn clicked');
        const action = {type: 'SET_SUPPORT', payload: this.state.support}
        this.props.dispatch(action)
        this.props.history.push('/fourthpage')
    }

    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <input onChange={this.handleInputChange} type="number" />
                <button onClick={this.handleNextButton}>Next</button>
                <Review />
            </div>
        );
    }
}

export default connect()(ThirdPage);