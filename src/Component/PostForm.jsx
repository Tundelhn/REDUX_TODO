import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/postActions';
import PropTypes from 'prop-types';
export class PostForm extends Component {
  state = {
    title: '',
    body: ''
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.addPost(post);
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="title">Title</label> <br />
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />
        </div>
        <div>
          <label htmlFor="body">Body</label> <br />
          <textarea
            name="body"
            value={this.state.body}
            onChange={this.onChange}
            cols="30"
            rows="10"></textarea>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}
PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
