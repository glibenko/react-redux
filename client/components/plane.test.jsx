import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
// import axios from 'axios';
import { reduxPlane, reduxThunk, reduxSaga } from '../reducers';
import sagas from '../sagas';
import PlainRedux from './PlainRedux';
import action from './action';

jest.mock('./action');

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

configure({ adapter: new Adapter() });

const store = createStore(
  combineReducers({ reduxPlane, reduxThunk, reduxSaga }),
  composeEnhancer(applyMiddleware(thunk, sagaMiddleware))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(sagas);

const resp = { request: { responseURL: 'https://picsum.photos/200/200/?image=367' } };
const resp2 = { request: { responseURL: 'https://picsum.photos/200/200/?image=1' } };
const respError = 'err';

describe('PlainRedux', () => {
  let wrapper;
  function init() {
    return mount(
      <Provider store={store}>
        <PlainRedux />
      </Provider>,
    );
  }

  afterEach(() => {
    wrapper.unmount();
  });


  it('happy case', async () => {
    action.mockImplementationOnce(() => Promise.resolve(resp));
    wrapper = await init();
    wrapper.update();
    expect(wrapper.exists('.block')).toBeTruthy();
    expect(wrapper.exists('.name')).toBeTruthy();
    expect(wrapper.exists('.btn')).toBeTruthy();
    expect(wrapper.find('img').prop('src')).toEqual('https://picsum.photos/200/200/?image=367');
  });

  it('update after click', async () => {
    const req = {};
    req.promises = [];
    action.mockImplementationOnce(() => Promise.resolve(resp));
    wrapper = await init();
    wrapper.update();
    expect(wrapper.find('img').prop('src')).toEqual('https://picsum.photos/200/200/?image=367');
    action.mockImplementationOnce(() => Promise.resolve(resp2));
    wrapper.find('.btn').simulate('click');
    await Promise.all(req.promises);
    wrapper.update();
    expect(wrapper.find('img').prop('src')).toEqual('https://picsum.photos/200/200/?image=1');
  });

  it('img error', async () => {
    const req = {};
    req.promises = [];
    action.mockImplementationOnce(() => Promise.resolve(respError));
    wrapper = await init();
    await Promise.all(req.promises);
    wrapper.update();
    expect(wrapper.exists('img')).toBeFalsy();
  });
});
