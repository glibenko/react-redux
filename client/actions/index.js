export function fetchPlane(img) {
  return {
    type: 'FETCH_IMG_PLANE',
    img,
  };
}

export function fetchPlaneLoading(boolean) {
  return {
    type: 'FETCH_LOADING_PLANE',
    loading: boolean,
  };
}

export function fetchPlaneError(boolean) {
  return {
    type: 'FETCH_ERROR_PLANE',
    error: boolean,
  };
}

export function fetchThunk(img) {
  return {
    type: 'FETCH_IMG_THUNK',
    img,
  };
}

export function fetchThunkLoading(boolean) {
  return {
    type: 'FETCH_LOADING_THUNK',
    loading: boolean,
  };
}

export function fetchThunkError(boolean) {
  return {
    type: 'FETCH_ERROR_THUNK',
    error: boolean,
  };
}

export function loadThunk() {
  return dispatch => {
    dispatch(fetchThunkLoading(true));
    fetch('https://picsum.photos/200/200/?random')
      .then(res => res.url)
      .then(img => {
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
