import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxPlane, reduxThunk } from './reducers';
import App from './components';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ reduxPlane, reduxThunk }),
  composeEnhancer(applyMiddleware(thunk))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
