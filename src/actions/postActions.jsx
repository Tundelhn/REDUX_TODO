import { FETCH_POSTS, NEW_POSTS } from './types';
export const getPosts = () => dispatch => {
  console.log('fetching');
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    )
    .catch(err => console.log(err));
};
export const addPost = post => dispatch => {
  console.log('action clled');
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=20', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POSTS,
        payload: post
      })
    )
    .catch(err => console.log(err));
};
