export function img(state = [], action) {
  switch (action.type) {
    case 'FETCH_IMG':
      return action.img;
    default:
      return state;
  }
}

export function imgT(state = [], action) {
  switch (action.type) {
    case 'FETCH_IMG_T':
      return action.img;
    default:
      return state;
  }
}
