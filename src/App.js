import React, { Component } from 'react';
import Post from './components/Posts';
import PostForm from './components/PostForm';

class App extends Component {
  
  
  render() {
    
    return (
      <div className="App">
        <PostForm/>
        <Post/>
      </div>
    );
  }
}

export default App;
