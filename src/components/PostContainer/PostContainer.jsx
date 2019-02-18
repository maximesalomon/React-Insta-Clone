import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.jsx';
import './PostContainer.css';

import heart from './img/heart.png';
import comment from './img/comment.png';
import send from './img/send.png';
import save from './img/save.png';

// import { prependOnceListener } from 'cluster';

const PostContainer = (props) => {
    return (
        <div>
            { console.log(props) }
            <div key={props.CommentSectionidx} className="postContainer">
                <div className="postHeader">
                    <div className="headerUserThumbnail"><img src={props.post.thumbnailUrl} alt={props.post.username} height="30" width="30"></img></div>
                    <div className="headerUserName">{props.post.username}</div>
                </div>
                <div className="postImage">
                    <img src={props.post.imageUrl} alt="instagram" width="614"></img>
                </div>
                <div className="postFooter">
                    <div className="postActions">
                        <div className="actions">
                            <div><img className="heartPost" src={heart} alt="Heart" height="24" width="24" /></div>
                            <div><img className="commentPost" src={comment} alt="Comment" height="24" width="24" /></div>
                            <div><img className="sendPost" src={send} alt="Send" height="24" width="24" /></div>
                        </div>
                        <div className="saveAction"><img className="savePost" src={save} alt="Save" height="24" width="24" /></div>
                    </div>
                    <div className="likes">{props.post.likes} likes</div>
                    {
                        props.post.comments.map((comment, idx) => (
                            <CommentSection comments={comment} id={idx} />
                        ))

                    }
                    <div className="addComment">
                        <input key={props.idx} id={props.idx} onChange={props.handleComment} placeholder="Add a comment..." onKeyDown={props.addNewComment}></input>
                    </div>
                </div>
            </div>
        </div>
    )
};

PostContainer.propTypes = {
    dummyData: PropTypes.shape({
        username: PropTypes.string,
    })
  };

// PostContainer.propTypes = {
//     dummyData: PropTypes.shape({
//         username: PropTypes.string,
//         thumbnail: PropTypes.string,
//         imageUrl: PropTypes.string,
//         likes: PropTypes.number,
//         timestamp: PropTypes.string,
//         comments: PropTypes.shape({
//         username: PropTypes.string,
//         text: PropTypes.string,
//         })
//     })
//   };

export default PostContainer;