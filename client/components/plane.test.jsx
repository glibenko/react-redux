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
import {
  fetchPlane,
  fetchPlaneLoading,
  fetchPlaneError,
} from '../actions';

jest.mock('axios');
jest.useFakeTimers();



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

  it('styles', async () => {
    const resp = { request: { responseURL: 'https://picsum.photos/200/200/?image=367' } };
    axios.get.mockImplementation(() => Promise.resolve(resp));
    const wrapper = await init();
    console.log(wrapper.debug());
    // wrapper.props().store.dispatch(fetchPlaneLoading(false))
    // store.dispatch(fetchPlane('https://picsum.photos/200/200/?image=367'));
    // store.dispatch(fetchPlaneLoading(false));
    // store.dispatch({type: 'FETCH_LOADING_PLANE', loading: false});
    
    // setLoading(false);
    // console.log(wrapper.debug());
  });


  it('fetch data', async () => {
    const wrapper = await init();
    // const resp = { request: { responseURL: 'https://picsum.photos/200/200/?image=367' } };
    // axios.get.mockImplementation(() => Promise.resolve(resp));
  // return axios.get();
    // await store.dispatch(fetchPlaneLoading(false));
    //  expect(axios).toHaveBeenCalledTimes(1);
    // jest.runAllTimers();
    // expect(setTimeout).toHaveBeenCalledTimes(1);
    // expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
    // axios.get().then(res => expect(res).toEqual(resp));
    console.log(wrapper.debug());
  });
});
