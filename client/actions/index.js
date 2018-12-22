// @flow
export function fetchPlane(img: string): Object {
  return {
    type: 'FETCH_IMG_PLANE',
    img,
  };
}

export function fetchPlaneLoading(boolean: boolean): Object {
  return {
    type: 'FETCH_LOADING_PLANE',
    loading: boolean,
  };
}

export function fetchPlaneError(boolean: boolean): Object {
  return {
    type: 'FETCH_ERROR_PLANE',
    error: boolean,
  };
}

export function fetchThunk(img: string): Object {
  return {
    type: 'FETCH_IMG_THUNK',
    img,
  };
}

export function fetchThunkLoading(boolean: boolean): Object {
  return {
    type: 'FETCH_LOADING_THUNK',
    loading: boolean,
  };
}

export function fetchThunkError(boolean: boolean): Object {
  return {
    type: 'FETCH_ERROR_THUNK',
    error: boolean,
  };
}

type Action =
  | { type: "FETCH_IMG_THUNK", img: string }
  | { type: "FETCH_LOADING_THUNK", loading: boolean }
  | { type: "FETCH_ERROR_THUNK", error: boolean };

type PromiseAction = Promise<Action>;
// eslint-disable-next-line
type ThunkAction = (dispatch: Dispatch) => any;
type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;

export function loadThunk(): ThunkAction {
  return (dispatch) => {
    dispatch(fetchThunkLoading(true));
    fetch('https://picsum.photos/200/200/?random')
      .then(res => res.url)
      .then((img) => {
        // throw 'Parameter is not a number!';
        setTimeout(() => {
          dispatch(fetchThunkLoading(false));
          dispatch(fetchThunk(img));
        }, 3000);
      })
      .catch(() => {
        dispatch(fetchThunkLoading(false));
        dispatch(fetchThunkError(true));
      });
  };
}

export function fetchSaga(img: string): Object {
  return {
    type: 'FETCH_IMG_SAGA',
    img,
  };
}

export function fetchSagaLoading(boolean: boolean): Object {
  return {
    type: 'FETCH_LOADING_SAGA',
    loading: boolean,
  };
}

export function fetchSagaError(boolean: boolean): Object {
  return {
    type: 'FETCH_ERROR_SAGA',
    error: boolean,
  };
}

export function saga(): Object {
  return { type: 'FETCH_SAGA' };
}
