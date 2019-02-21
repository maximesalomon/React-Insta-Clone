import React from 'react';

import styled from 'styled-components';

const Comments = styled.div `
    margin-left: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
`

const Comment = styled.div `
    display: flex;
    padding-bottom: 7px;
`

const CommentUserName = styled.p `
    font-weight: 600;
    color: #262626;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
`

const CommentContent = styled.p `
    margin-left: 7px;
    font-weight: 400;
    color: #262626;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
`

const AddComment = styled.div `
    margin-left: 16px;
    margin-right: 16px;
    height: 56px;
    border-top: 1px solid #efefef;
`

const AddCommentInput = styled.input `
    width: 556px;
    margin-top: 16px; 
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    background: 0 0;
    border: 0;
    font-size: inherit;
    height: 16px;
    max-height: 80px;
    outline: 0;
    padding: 0;
    resize: none;
    font-weight: 300;
`


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
                        <Comments key={idx}>
                            <Comment key={comment.idx}>
                                <CommentUserName>{comment.username}</CommentUserName>
                                <CommentContent>{comment.text}</CommentContent>
                            </Comment>
                        </Comments>
                    ))
                }
                <AddComment>
                    <AddCommentInput
                        key={this.props.id}
                        value={this.state.inputValue}
                        placeholder="Add a comment..."
                        onChange={event => this.setState({ inputValue: event.target.value })}
                        onKeyDown={this.onSubmit}
                    >
                    </AddCommentInput>
                </AddComment>
            </>
        )
    }
}

export default CommentSection;