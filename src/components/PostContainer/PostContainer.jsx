import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.jsx';
import './PostContainer.css';

import heart from './img/heart.png';
import comment from './img/comment.png';
import send from './img/send.png';
import save from './img/save.png';

class PostContainer extends React.Component {
    state = {
        liked : false,
    }

    toggleLiked() {
        console.log("toggled");
    }
    render() {
        return (
            <div>
                <div key={this.props.CommentSectionidx} className="postContainer">
                    <div className="postHeader">
                        <div className="headerUserThumbnail"><img src={this.props.post.thumbnailUrl} alt={this.props.post.username} height="30" width="30"></img></div>
                        <div className="headerUserName">{this.props.post.username}</div>
                    </div>
                    <div className="postImage">
                        <img src={this.props.post.imageUrl} alt="instagram" width="614"></img>
                    </div>
                    <div className="postFooter">
                        <div className="postActions">
                            <div className="actions">
                                <div><img onKeyDown={this.toggleLiked} onClick={ () => this.props.addLike(this.props.post.id)} className="heartPost" src={heart} alt="Heart" height="24" width="24" /></div>
                                <div><img className="commentPost" src={comment} alt="Comment" height="24" width="24" /></div>
                                <div><img className="sendPost" src={send} alt="Send" height="24" width="24" /></div>
                            </div>
                            <div className="saveAction"><img className="savePost" src={save} alt="Save" height="24" width="24" /></div>
                        </div>
                        <div className="likes">{this.props.post.likes} likes</div>
                        <CommentSection
                            comments = { this.props.post.comments }
                            id = { this.props.post.id }
                            handleComment = { this.props.handleComment }
                            addNewComment = { this.props.addNewComment }
                        />
                    </div>
                </div>
            </div>
        )
    }
};

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
      })
    ).isRequired
  })
};

export default PostContainer;