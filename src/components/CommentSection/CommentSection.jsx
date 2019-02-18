import React from 'react';
import './CommentSection.css';

const CommentSection = (props) => {
    return (
        <>
            {
                props.comments.map((props) => (
                    <div className="comments">
                        <div key={props.idx} className="comment">
                            <p className="commentUserName">{props.username}</p>
                            <p className="commentContent">{props.text}</p>
                        </div>
                    </div>
                ))
            }
            <div className="addComment">
                <input
                    key = { props.idx }
                    idx = { props.idx }
                    onChange = { props.handleComment }
                    placeholder = "Add a comment..."
                    onKeyDown = { props.addNewComment }
                >
        
                </input>
            </div>
        </>

        // <>
        //     <div className="comments">
        //     <div key={props.id} className="comment">
        //         <p className="commentUserName">{props.comments.username}</p>
        //     </div>
        //     </div>
        //     <div className="addComment">
        //         <input
        //             key = { props.idx }
        //             id = { props.idx }
        //             onChange = { props.handleComment }
        //             placeholder = "Add a comment..."
        //             onKeyDown={props.addNewComment}
        //         >
        //         </input>
        //     </div>
        // </>
    )
}

export default CommentSection;