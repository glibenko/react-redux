import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { reduxPlane, reduxThunk, reduxSaga } from '../reducers';
import sagas from '../sagas';
import PlainRedux from './PlainRedux';

jest.mock('axios');

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

configure({ adapter: new Adapter() });

const store = createStore(
  combineReducers({ reduxPlane, reduxThunk, reduxSaga }),
  composeEnhancer(applyMiddleware(thunk, sagaMiddleware))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(sagas);

describe('PlainRedux', () => {
  function init() {
    return mount(
      <Provider store={store}>
        <PlainRedux />
      </Provider>
    );
  }

  it('fetch data', async () => {
    const wrapper = await init();
    console.log(wrapper.debug());
    const resp = { request: { responseURL: 'https://picsum.photos/200/200/?image=367' } }
    axios.get.mockImplementation(() => Promise.resolve(resp));
    axios.get().then(res => expect(res).toEqual(resp));

    console.log(wrapper.debug());
  });
});
