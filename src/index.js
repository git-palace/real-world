import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import App from './components/App';

const defaultState = {
  appName: 'conduit',
  article: null
}

const reducer = (state = defaultState, action) => {
  return state;
}

const store = createStore(reducer)

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));