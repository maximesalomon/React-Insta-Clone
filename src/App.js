import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.jsx' 
import PostContainer from './components/PostContainer/PostContainer.jsx' 
import './components/SearchBar/SearchBar.css'
import dummyData from './dummy-data.js'

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

  // deteleComment = (comment, idx) => {
  //   console.log("deleted")
  // }

  render() {
    console.log("rendered")
    return (
      <div className="container">
        <SearchBar filterUserName = { this.filterUserName } />
        <div className="contentContainer">
          {
              this.state.dummyData.map((post, idx) => (
                <PostContainer
                  key = { idx }
                  post = { post }
                  handleComment = { this.handleComment }
                  addNewComment = { this.addNewComment }
                  addLike = { this.addLike }
                  deleteComment = { this.deleteComment }
                />
              ))
          }
          <   div className="sideBar"></div>
        </div>
      </div>
    );
  }
}

export default App;




