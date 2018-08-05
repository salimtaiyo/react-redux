import React, { Component } from 'react';
import Post from './components/Posts';
import PostForm from './components/PostForm';
import { Provider } from 'react-redux';
import store from './store';




class App extends Component {
  render() {
    
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm/>
          <Post/>
        </div>
      </Provider>
      
    );
  }
}

export default App;
