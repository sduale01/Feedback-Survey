import React, {Component} from 'react';
import axios from 'axios';

class FeedbackRow extends Component {

    handleDelete = () => {
        console.log('delete pressed');
        
        axios.delete(`/feedback/${this.props.feedRow.id}`).then(response => {
            this.props.getFeedback();
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.feedRow.feeling}</td>
                <td>{this.props.feedRow.understanding}</td>
                <td>{this.props.feedRow.support}</td>
                <td>{this.props.feedRow.comments}</td>
                <td><button onClick={this.handleDelete}>Delete</button></td>
            </tr>
        );
    }
}

export default FeedbackRow;