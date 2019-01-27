import React, {Component} from 'react';

class Feelings extends Component {
    // runs when next button is clicked.
    handleNextButton = () => {
        console.log('next btn clicked');
        this.props.history.push('/understanding')
    }
    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <button onClick={this.handleNextButton}>Next</button>
            </div>
        );
    }
}

export default Feelings;