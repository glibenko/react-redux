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
import {
  fetchPlane,
  fetchPlaneLoading,
  fetchPlaneError,
} from '../actions';

// jest.mock('axios');
// jest.useFakeTimers();
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

describe('PlainRedux', () => {
  function init() {
    return mount(
      <Provider store={store}>
        <PlainRedux />
      </Provider>,
    );
  }

  it('happy case', async () => {
    // const resp = { request: { responseURL: 'https://picsum.photos/200/200/?image=367' } };
    // action.mockImplementationOnce(() => Promise.resolve(resp));
    // action.mockImplementationOnce(() => Promise.resolve(resp));
  action();
    const wrapper = await init();
    console.log(wrapper.debug());
    // console.log('object', wrapper.exists('.block'))
    // wrapper.find('.btn').simulate('click');
// console.log('object', wrapper.find('img').html())
    console.log(wrapper.debug());
    expect(wrapper.find('.block')).toBeTruthy();
    expect(wrapper.find('.name')).toBeTruthy();
    expect(wrapper.find('.btn')).toBeTruthy();

    // expect(wrapper.props().children.props.containerBlock).toBeTruthy();
    // expect(wrapper.props().children.props.name).toBeTruthy();
    // expect(wrapper.props().children.props.btn).toBeTruthy();
  });


  // it('fetch data', async () => {

  //   // const resp = { request: { responseURL: 'https://picsum.photos/200/200/?image=367' } };
  //   // // const br = await axios.get.mockImplementation(() => Promise.resolve(resp));
  //   // // console.log('br', br);
  //   // axios.get.mockImplementation(async () => resp);
  //   const wrapper = await init();

  //    console.log(wrapper.debug());
  // });
});
