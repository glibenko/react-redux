export default function img(state = [], action) {
    switch (action.type) {
        case 'FETCH_IMG':
            return action.img;
        case 'FETCH_IMG_T':
            return action.img;
        default:
            return state;
    }
}