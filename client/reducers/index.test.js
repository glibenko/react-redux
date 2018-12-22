import { reduxPlane, reduxThunk, reduxSaga } from './index';

const initialState = {
  img: '',
  loading: false,
  error: false,
};

describe('redusers', () => {
  it('reduxPlane', () => {
    expect(reduxPlane(undefined, {})).toEqual(initialState);
  });
  it('reduxPlane img', () => {
    const wait = { img: 'https://picsum.img', loading: false, error: false };
    const action = { type: 'FETCH_IMG_PLANE', img: 'https://picsum.img' };
    expect(reduxPlane(undefined, action)).toEqual(wait);
  });
  it('reduxPlane loading', () => {
    const state = { img: 'https://picsum.img', loading: false, error: false };
    const wait = { img: 'https://picsum.img', loading: true, error: false };
    const action = { type: 'FETCH_LOADING_PLANE', loading: true };
    expect(reduxPlane(state, action)).toEqual(wait);
  });
  it('reduxPlane error', () => {
    const state = { img: 'https://picsum.img', loading: true, error: false };
    const wait = { img: 'https://picsum.img', loading: true, error: true };
    const action = { type: 'FETCH_ERROR_PLANE', error: true };
    expect(reduxPlane(state, action)).toEqual(wait);
  });

  it('reduxThunk', () => {
    expect(reduxThunk(undefined, {})).toEqual(initialState);
  });
  it('reduxThunk img', () => {
    const wait = { img: 'https://picsum.img', loading: false, error: false };
    const action = { type: 'FETCH_IMG_THUNK', img: 'https://picsum.img' };
    expect(reduxThunk(undefined, action)).toEqual(wait);
  });
  it('reduxThunk loading', () => {
    const state = { img: 'https://picsum.img', loading: false, error: false };
    const wait = { img: 'https://picsum.img', loading: true, error: false };
    const action = { type: 'FETCH_LOADING_THUNK', loading: true };
    expect(reduxThunk(state, action)).toEqual(wait);
  });
  it('reduxThunk error', () => {
    const state = { img: 'https://picsum.img', loading: true, error: false };
    const wait = { img: 'https://picsum.img', loading: true, error: true };
    const action = { type: 'FETCH_ERROR_THUNK', error: true };
    expect(reduxThunk(state, action)).toEqual(wait);
  });

  it('reduxSaga', () => {
    expect(reduxSaga(undefined, {})).toEqual(initialState);
  });
  it('reduxSaga img', () => {
    const wait = { img: 'https://picsum.img', loading: false, error: false };
    const action = { type: 'FETCH_IMG_SAGA', img: 'https://picsum.img' };
    expect(reduxSaga(undefined, action)).toEqual(wait);
  });
  it('reduxSaga loading', () => {
    const state = { img: 'https://picsum.img', loading: false, error: false };
    const wait = { img: 'https://picsum.img', loading: true, error: false };
    const action = { type: 'FETCH_LOADING_SAGA', loading: true };
    expect(reduxSaga(state, action)).toEqual(wait);
  });
  it('reduxSaga error', () => {
    const state = { img: 'https://picsum.img', loading: true, error: false };
    const wait = { img: 'https://picsum.img', loading: true, error: true };
    const action = { type: 'FETCH_ERROR_SAGA', error: true };
    expect(reduxSaga(state, action)).toEqual(wait);
  });
});
