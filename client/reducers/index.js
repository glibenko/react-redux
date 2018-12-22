// @flow

type State = {
  img: string,
  loading: boolean,
  error: boolean,
};

type Action = {
  type: string,
  img: string,
  loading: boolean,
  error: boolean
};

const initialState = {
  img: '',
  loading: false,
  error: false,
};

export function reduxPlane(state: State = initialState, action: Action): State {
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

export function reduxThunk(state: State = initialState, action: Action) {
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

export function reduxSaga(state: State = initialState, action: Action) {
  switch (action.type) {
    case 'FETCH_IMG_SAGA':
      return Object.assign({}, state, { img: action.img });
    case 'FETCH_LOADING_SAGA':
      return Object.assign({}, state, { loading: action.loading });
    case 'FETCH_ERROR_SAGA':
      return Object.assign({}, state, { error: action.error });
    default:
      return state;
  }
}
