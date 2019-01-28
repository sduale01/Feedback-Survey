import React, {Component} from 'react';
import Review from '../Review/Review.js'
import {connect} from 'react-redux';


class Feelings extends Component {
    constructor() {
        super();
        this.state = {
            feeling: 0,
        }
    }

    // changes state when input field is filled
    handleInputChange = (event) => {
        this.setState({
            feeling: event.target.value
        });
    }
    // runs when next button is clicked.
    handleNextButton = () => {
        // console.log('next btn clicked');
        const action = {type: 'SET_FEELING', payload: this.state.feeling}
        this.props.dispatch(action)
        this.props.history.push('/understanding')
    }
    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <input onChange={this.handleInputChange} type="number" />
                <button onClick={this.handleNextButton}>Next</button>
                <Review />
            </div>
        );
    }
}

export default connect()(Feelings);