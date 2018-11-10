import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchT } from '../actions';

function fetchData() {
    return async (dispatch, getState) => {
        fetch('https://picsum.photos/200/200/?random')
            .then(res => res.url)
            .then(url => {
                console.log('url', url);
                dispatch(fetchT(url));
                return url;
            });
    }
}

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
        console.log('object-2', fetchData())
        fetchData()
    }

    componentDidMount() {
        fetchData()
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
    return {
        img: state,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: img => dispatch(fetchT(img)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThunkRedux);
