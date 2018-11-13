export function fetchI(img) {
  return {
    type: 'FETCH_IMG',
    img,
  };
}

export function fetchT(img) {
  return {
    type: 'FETCH_IMG_T',
    img,
  };
}

export function fetchLoad() {
  return dispatch => {
    fetch('https://picsum.photos/200/200/?random')
      .then(res => res.url)
      .then(url => {
        setTimeout(() => {
          console.log('url', url);
          dispatch(fetchT(url));
        }, 3000);
      });
  };
}
