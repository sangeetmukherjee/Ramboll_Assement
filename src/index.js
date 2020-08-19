import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import getLandingDataReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(getLandingDataReducer, applyMiddleware(thunk)) // this is store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('root')
);
registerServiceWorker();
