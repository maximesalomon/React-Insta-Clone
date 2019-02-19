import React from 'react';
import './CommentSection.css';

class CommentSection extends React.Component {
    state = {
        inputValue: "",
    }

    onSubmit = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            this.props.addNewComment(this.state.inputValue, this.props.id)
            this.setState({ inputValue: ''})
        }
    }

    render() {
        return (
            <>
                {
                    this.props.comments.map((comment, idx) => (
                        <div key={idx} className="comments">
                            <div key={comment.idx} className="comment">
                                <p className="commentUserName">{comment.username}</p>
                                <p className="commentContent">{comment.text}</p>
                                {/* <p onClick={ this.props.deleteComment(this.props.id, idx)} className="commentDelete">x</p> */}
                            </div>
                        </div>
                    ))
                }
                <div className="addComment">
                    <form>
                        <input
                            key={this.props.id}
                            value={this.state.inputValue}
                            placeholder="Add a comment..."
                            onChange={event => this.setState({ inputValue: event.target.value })}
                            onKeyDown={this.onSubmit}
                        >
                        </input>
                    </form>
                </div>
            </>
        )
    }
}

export default CommentSection;