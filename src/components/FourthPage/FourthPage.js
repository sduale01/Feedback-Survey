import React, {Component} from 'react';
import Review from '../Review/Review.js'
import {connect} from 'react-redux';

class ThirdPage extends Component {
    constructor() {
        super();
        this.state = {
            comments: '',
        }
    }

    // changes state when input field is filled
    handleInputChange = (event) => {
        this.setState({
            comments: event.target.value
        });
    }

    // runs when next button is clicked.
    handleNextButton = () => {
        if (this.state.comments === '') {
            alert('Must fill out comment')
        } else {
            console.log('next btn clicked');
        const action = {type: 'SET_COMMENTS', payload: this.state.comments}
        this.props.dispatch(action)
        this.props.history.push('/review')
        }
        
    }

    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <input onChange={this.handleInputChange} type="text" />
                
                <button onClick={this.handleNextButton}>Next</button>
                <Review />
                
            </div>
        );
    }
}

export default connect()(ThirdPage);