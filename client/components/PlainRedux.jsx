import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchI } from '../actions';

export class PlainRedux extends Component {
  fetchDataG = () => {
    const { fetchData } = this.props;
    fetch('https://picsum.photos/200/200/?random')
      .then(res => res.url)
      .then(url => {
        setTimeout(() => {
          fetchData(url);
        }, 3000);
      });
  }

  handler = () => {
    this.fetchDataG();
  }

  componentDidMount() {
    this.fetchDataG();
  }

  render() {
    const {
      containerBlock,
      name,
      btn,
      img
    } = this.props;

    return (
      <div
        style={containerBlock}
      >
        <div style={name}>
            Redux
        </div>
        <div
          onClick={this.handler}
          onKeyDown={this.handler}
          style={btn}
        >
          get img
        </div>
        {img && <img src={img} alt="" />}
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

export default connect(mapStateToProps, mapDispatchToProps)(PlainRedux);
