import React, {Component} from 'react';

class FourthPage extends Component {
    // runs when next button is clicked.
    handleNextButton = () => {
        console.log('next btn clicked');
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <button onClick={this.handleNextButton}>Next</button>
            </div>
        );
    }
}

export default FourthPage;