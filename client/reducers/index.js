
const initialState = {
  img: '',
  loading: false,
  error: false,
};

export function reduxPlane(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_IMG_PLANE':
      return Object.assign({}, state, { img: action.img });
    case 'FETCH_LOADING_PLANE':
      return Object.assign({}, state, { loading: action.loading });
    case 'FETCH_ERROR_PLANE':
      return Object.assign({}, state, { error: action.error });
    default:
      return state;
  }
}

export function reduxThunk(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_IMG_THUNK':
      return Object.assign({}, state, { img: action.img });
    case 'FETCH_LOADING_THUNK':
      return Object.assign({}, state, { loading: action.loading });
    case 'FETCH_ERROR_THUNK':
      return Object.assign({}, state, { error: action.error });
    default:
      return state;
  }
}
