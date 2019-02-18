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
      comment: '',
      dummyData: [],
    }
  }

  componentDidMount() {
    this.setState({dummyData: dummyData})
  }

  handleComment = event => {
    this.setState({comment: event.target.value})
  }


  addNewComment = (event, idx) => {
    if (event.keyCode === 13) {
      console.log(idx);
      let newComment = { username: "maximesalomon", text: this.state.comment }
      let newDummyData = dummyData[idx].comments.push(newComment);

      // let newDummyData = this.state.dummyData.map((post) => {
      //   let newComment = {
      //     username: "maximesalomon", text: this.state.comment
      //   }
      //   post.comments.push(newComment)
      //   return post;
      // })
      this.setState({ dummyData: newDummyData })
      this.setState({ comment: '' })

      // update localStorage
      localStorage.setItem("comments", newDummyData )
    }
  }

  render() {
    return (
      <div className="container">
        <SearchBar />
        <div className="contentContainer">
        {
              dummyData.map((post, idx) => (
                <PostContainer
                  idx = { idx }
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




