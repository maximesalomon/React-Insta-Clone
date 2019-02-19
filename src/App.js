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
    // let newDummyData = dummyData[idx].comments.concat(newComment);

    let newDummyData = dummyData.map((post) => {
      if (post.id === idx) {
        let newComments = post.comments.concat(newComment);
        post.comments = newComments;
      }
      return post;
    })


    this.setState({ dummyData: newDummyData, comment: '' })
  }

  render() {
    return (
      <div className="container">
        <SearchBar />
        <div className="contentContainer">
        {
              dummyData.map((post) => (
                <PostContainer
                  post = { post }
                  handleComment = { this.handleComment }
                  addNewComment = { this.addNewComment }
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




