import * as action from './index';

const img = 'https://picsum.photos/200/200/?image=367';

describe('plain', () => {
  it('img', () => {
    const wait = { type: 'FETCH_IMG_PLANE', img };
    expect(action.fetchPlane(img)).toEqual(wait);
  });
  it('loading', () => {
    const wait = { type: 'FETCH_LOADING_PLANE', loading: true };
    expect(action.fetchPlaneLoading(true)).toEqual(wait);
  });
  it('error', () => {
    const wait = { type: 'FETCH_ERROR_PLANE', error: true };
    expect(action.fetchPlaneError(true)).toEqual(wait);
  });
});
