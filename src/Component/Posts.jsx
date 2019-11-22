import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';
import PropTypes from 'prop-types';
class Posts extends Component {
  componentWillMount() {
    this.props.getPosts();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    const postItem = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Post Crash Course</h1>
        {postItem}
      </div>
    );
  }
}
Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { getPosts })(Posts);
