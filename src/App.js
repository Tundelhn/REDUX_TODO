import React, { Component } from 'react';
import Posts from './Component/Posts';
import PostForm from './Component/PostForm';
import { Provider } from 'react-redux';
import store from './store';
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Posts />
          <PostForm />
        </div>
      </Provider>
    );
  }
}

export default App;
