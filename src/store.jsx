import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Reducers';
import thunk from 'redux-thunk';

const initialState = {};
const middleWare = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
