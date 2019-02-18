import React from 'react';
import './CommentSection.css';

const CommentSection = (props) => {
    return (
        <div className="comments">
            <div key={props.id} className="comment">
                <p className="commentUserName">{props.comments.username}</p>
                <p className="commentContent">{props.comments.text}</p>
            </div>
        </div>
    )
}

export default CommentSection;