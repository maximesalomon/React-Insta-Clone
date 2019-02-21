import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.jsx';

import heart from './img/heart.png';
import comment from './img/comment.png';
import send from './img/send.png';
import save from './img/save.png';

import styled from 'styled-components';

const PostStyle = styled.div `
    width: 614px;
    margin-top: 50px;
    margin-bottom: 70px;
    background-color: white;
`

const PostHeader = styled.div `
    width: 580px;
    height: 26px;
    display: flex;
    border: 1px solid #efefef;
    border-radius: 4px 4px 0px 0px;
    background-color: white;
    padding: 16px;
`

const HeaderUserThumbnail = styled.img `
    margin-left: 10px;
    cursor: pointer;
`

const HeaderUserName = styled.img `
    margin-left: 10px;
    color: #262626;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 5px;
    padding-top: 7px;
    font-family: Arial, Helvetica, sans-serif;
`

const PostImage = styled.img `
    border-radius: 0px 0px 4px 4px;
    background-color: white;
    width: 614px;
    padding: -1px;
`

const PostFooter = styled.div `
    border-right: 1px solid #efefef;
    border-left: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    background-color: white;
    width: 614px;
`

const PostActions = styled.div `
    display: flex;
    width: 614px;
    padding-top: 10px;
`

const Actions = styled.div `
    display: flex;
`

const HeartPost = styled.img `
    margin-left: 16px;
`

const CommentPost = styled.img `
    margin-left: 20px;
`

const SendPost = styled.img `
    margin-left: 20px;
`

const SaveAction = styled.img `
    margin-left: 444px;
`

const Likes = styled.div `
    margin-left: 16px;
    margin-top: 10px;
    font-weight: 600;
    color: #262626;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;   
`

class PostContainer extends React.Component {
    
    render() {
        return (
            <div>
                <PostStyle key={this.props.CommentSectionidx}>
                    <PostHeader>
                        <HeaderUserThumbnail src={this.props.post.thumbnailUrl} alt={this.props.post.username} height="30" width="30"></HeaderUserThumbnail>
                        <HeaderUserName {...this.props.post.username}></HeaderUserName>
                    </PostHeader>
                    <PostImage src={this.props.post.imageUrl} alt="instagram" width="614"></PostImage>
                    <PostFooter>
                        <PostActions>
                            <Actions>
                                <HeartPost onClick={ () => this.props.addLike(this.props.post.id)} src={heart} alt="Heart" height="24" width="24"></HeartPost>
                                <CommentPost src={comment} alt="Comment" height="24" width="24"></CommentPost>
                                <SendPost src={send} alt="Send" height="24" width="24"></SendPost>
                            </Actions>
                            <SaveAction src={save} alt="Save" height="24" width="24"></SaveAction>
                        </PostActions>
                        <Likes>{this.props.post.likes} likes</Likes>
                        <CommentSection
                            comments = { this.props.post.comments }
                            id = { this.props.post.id }
                            handleComment = { this.props.handleComment }
                            addNewComment = { this.props.addNewComment }
                        />
                    </PostFooter>
                </PostStyle>
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