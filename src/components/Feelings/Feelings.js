import React, {Component} from 'react';

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
        console.log('next btn clicked');
        this.props.history.push('/understanding')
    }
    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <input onChange={this.handleInputChange} type="number" />
                <button onClick={this.handleNextButton}>Next</button>
            </div>
        );
    }
}

export default Feelings;