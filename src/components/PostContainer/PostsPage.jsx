import React from 'react';
import PostContainer from './PostContainer.jsx';
import SearchBar from '/Users/maximesalomon/lambdaschool/React-Insta-Clone/src/components/SearchBar/SearchBar.jsx'

const PostPage = (props) => {

    return (
        <>
            <SearchBar filterUserName = { props.filterUserName } />
            <div className="contentContainer">
                {
                    props.dummyData.map((post, idx) => (
                        <PostContainer
                            key = { idx }
                            post = { post }
                            addNewComment = { props.addNewComment }
                            addLike = { props.addLike }
                        />
                    ))
                }
                <div className="sideBar"></div>
            </div>
        </>
    )
}

export default PostPage;