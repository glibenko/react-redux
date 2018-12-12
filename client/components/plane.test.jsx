import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlainRedux from './PlainRedux';
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
import { reduxPlane, reduxThunk, reduxSaga } from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

configure({ adapter: new Adapter() });

const store = createStore(
  combineReducers({ reduxPlane, reduxThunk, reduxSaga }),
  composeEnhancer(applyMiddleware(thunk, sagaMiddleware))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(sagas);

describe('<Foo />', () => {
  // it('calls componentDidMount', () => {
  //   sinon.spy(Foo.prototype, 'componentDidMount');
  //   const wrapper = mount(<PlainRedux />);
  //   expect(Foo.prototype.componentDidMount).to.have.property('callCount', 1);
  // });

  it('allows us to set props', async () => {
    const wrapper = await mount(
        <Provider store={store}>

    <PlainRedux />
     </Provider>
    );
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = mount((
  //     <Foo onButtonClick={onButtonClick} />
  //   ));
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });
});