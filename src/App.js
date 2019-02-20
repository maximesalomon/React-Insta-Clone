import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js'
import PostPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData,
    }
  }

  addNewComment = (newComment, idx) => {
    let newDummyData = dummyData.map((post) => {
      if (post.id === idx) {
        let newComments = post.comments.concat({username: "maximesalomon", text: newComment});
        post.comments = newComments;
      }
      return post;
    })
    this.setState({ dummyData: newDummyData })
  }

  addLike = (idx) => {
    let newDummyData = dummyData.map((post) => {
      if (post.id === idx) {
        post.likes++
      }
      return post;
    })
    this.setState({ dummyData: newDummyData })
  }

  filterUserName = (search) => {
    let newDummyData = dummyData.filter((post) => post.username.includes(search))
    this.setState({ dummyData: newDummyData })
  }

  render() {
    return (
      <div className="container">
        <PostPage
          dummyData = { this.state.dummyData }
          addNewComment = { this.addNewComment }
          addLike = { this.addLike }
          filterUserName = { this.filterUserName }
        />
      </div>
    );
  }
}

export default Authenticate(App);




