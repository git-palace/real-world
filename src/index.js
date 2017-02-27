import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { promiseMiddleware } from './middleware'

import App from './components/App';

const defaultState = {
  appName: 'conduit',
  articles: null
}

const reducer = (state = defaultState, action) => {
  switch (action.type){
    case 'HOME_PAGE_LOADED':
      return { ...state, articles: action.payLoad.articles }
    default:
      break
  }

  return state;
}

const store = createStore(reducer, applyMiddleware(promiseMiddleware))

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));