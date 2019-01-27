import React, {Component} from 'react';

class Understanding extends Component {
    // runs when next button is clicked.
    handleNextButton = () => {
        console.log('next btn clicked');
        this.props.history.push('/thirdpage')
    }

    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <button onClick={this.handleNextButton}>Next</button>
            </div>
        );
    }
}

export default Understanding;