import React, { Component } from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <PostPage />
      </div>
    );
  }
}

export default App;
