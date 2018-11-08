import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchI } from '../../actions';

function fetchData() {
    return fetch('https://picsum.photos/200/200/?random')
        .then(res => res.url)
        .then(url => {
            console.log('url', url);
            return url;
        });
}

export class App extends Component {


    constructor(props) {
        super(props);
        console.log('props', props);
        this.state = {
            loading: false,
            error: false,
            img: [],
        }
    }

    shouldComponentUpdate(nextProps) {
        console.log('nextProps', nextProps)
        return true;
    }


    handler = () => {
        fetchData().then(res => this.props.fetchData(res))
    }

    componentDidMount() {
        // console.log('fetchData()', fetchData())
        fetchData().then(res => this.props.fetchData(res))
        // this.setState({ img: [fetchData()] })
    }

    render() {
        return (
            <div>
                <div onClick={this.handler}>
                    get img
                </div>
                {this.props.img &&
                    this.props.img.map((el, i) => <img key={i} src={el} alt=""/>)
                }
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        img: state.img,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: img => dispatch(fetchI(img)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
