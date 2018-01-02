import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';

import playersReducer from './reducers/player';
import gameReducer from './reducers/game';

import './index.css';
import App from './App';

const reducer = combineReducers({
    playersReducer,
    gameReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>,
    document.getElementById('app')
  );
