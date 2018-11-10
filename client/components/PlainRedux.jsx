import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchI } from '../actions';

function fetchData() {
    return fetch('https://picsum.photos/200/200/?random')
        .then(res => res.url)
        .then(url => {
            // console.log('url', url);
            return url;
        });
}

export class PlainRedux extends Component {


    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            img: '',
        }
    }

    handler = () => {
        fetchData().then(res => this.props.fetchData(res))
    }

    componentDidMount() {
        fetchData().then(res => this.props.fetchData(res))
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
        fetchData: img => dispatch(fetchI(img)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlainRedux);
