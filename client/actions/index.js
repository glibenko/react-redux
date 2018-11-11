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

// export function fetchLoad() {
//     return (dispatch, getState) => {
//         console.log('getState', getState());
//         fetch('https://picsum.photos/200/200/?random')
//             .then(res => res.url)
//             .then(url => {
//                 setTimeout(() => {
//                     console.log('url', url);
//                     dispatch(fetchT(url));
//                 //return url;
//                 }, 3000);
//             });
//     }
// }

export function fetchDataG(dispatch) {
    return (dispatch) => {
    fetch('https://picsum.photos/200/200/?random')
        .then(res => res.url)
        .then(url => {
            // console.log('url', url);
            setTimeout(() => {
                console.log('url', url);
                dispatch(fetchI(url));
                // this.props.fetchData('lala');
                //return url;
            }, 3000);
            
        });
    }
}