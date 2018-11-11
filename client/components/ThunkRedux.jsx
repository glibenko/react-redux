import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLoad } from '../actions';

// function fetchDataF() {
//     return (dispatch, getState) => {
//         console.log('getState', getState);
//         fetch('https://picsum.photos/200/200/?random')
//             .then(res => res.url)
//             .then(url => {
//                 console.log('url', url);
//                 dispatch(fetchT(url));
//                 return url;
//             });
//     }
// }

export class ThunkRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            img: '',
        }
    }

    handler = () => {
        console.log('object')
        // console.log('object-2', fetchData())
        this.props.fetchData()
    }

    componentDidMount() {
        this.props.fetchData()
    }

    componentDidUpdate() {
        // console.log('this.props.img', this.props.img)
    }

    render() {
        return (
            <div>
                <div onClick={this.handler}>
                    get img
                </div>
                {this.props.img &&
                    // this.props.img.map((el, i) => <img key={i} src={el} alt=""/>)
                    <img src={this.props.img} alt=""/>
                }
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('state', state)
    return {
        img: state.imgT,
    };
};

const mapDispatchToProps = dispatch => {
    console.log(dispatch)
    return {
        fetchData: () => dispatch(fetchLoad()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThunkRedux);
