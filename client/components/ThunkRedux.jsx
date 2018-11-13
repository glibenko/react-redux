import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLoad } from '../actions';

export class ThunkRedux extends Component {
  handler = () => {
    this.props.fetchData()
  }

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    const {
      containerBlock,
      name,
      btn,
      img
    } = this.props;

    return (
      <div style={containerBlock}>
        <div style={name}>
          Redux Thunk
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

const mapStateToProps = state => (
  {
    img: state.imgT,
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchData: () => dispatch(fetchLoad()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ThunkRedux);
