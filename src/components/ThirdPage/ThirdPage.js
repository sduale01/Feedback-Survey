import React, {Component} from 'react';

class ThirdPage extends Component {
    // runs when next button is clicked.
    handleNextButton = () => {
        console.log('next btn clicked');
        this.props.history.push('/fourthpage')
    }
    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <button onClick={this.handleNextButton}>Next</button>
            </div>
        );
    }
}

export default ThirdPage;