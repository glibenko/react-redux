import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDataG } from '../actions';

export class PlainRedux extends Component {


    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            img: '',
        }
    }

    fetchDataG = () => {
        return fetch('https://picsum.photos/200/200/?random')
            .then(res => res.url)
            .then(url => {
                // console.log('url', url);
                setTimeout(() => {
                    console.log('url', url);
                    this.props.fetchData(url);
                    // this.props.fetchData('lala');
                    //return url;
                }, 3000);
                
            });
    }

    handler = () => {
        // fetchDataG().then(res => this.props.fetchData(res))
         this.fetchDataG();
        // this.props.fetchData();
    }

    componentDidMount() {
        // this.props.fetchData();
         this.fetchDataG();
   
       
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
        img: state.img,
    };
};

const mapDispatchToProps = dispatch => {
    console.log(dispatch)
    return {
        fetchData: img => dispatch(fetchDataG(dispatch)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlainRedux);
