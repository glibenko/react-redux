export function fetchI(img) {
    return {
        type: 'FETCH_IMG',
        img
    }
}

export function fetchT(img) {
    return {
        type: 'FETCH_IMG_T',
        img
    }
}
