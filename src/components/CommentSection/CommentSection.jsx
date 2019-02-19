import React from 'react';
import './CommentSection.css';

class CommentSection extends React.Component {
    state = {
        inputValue: "",
    }

    onSubmit() {
        debugger;
        this.props.addNewComment(this.state.inputValue, this.props.id)
    }

    render() {
        return (
            <>
                {
                    this.props.comments.map((comment) => (
                        <div className="comments">
                            <div key={comment.idx} className="comment">
                                <p className="commentUserName">{comment.username}</p>
                                <p className="commentContent">{comment.text}</p>
                            </div>
                        </div>
                    ))
                }
                <div className="addComment">
                    <input
                        key={this.props.id}
                        placeholder="Add a comment..."
                        onChange={event => this.setState({ inputValue: event.target.value })}
                    >
                    </input>
                    <button onClick={this.onSubmit}>Submit</button>
                </div>
            </>
        )
    }
}

export default CommentSection;