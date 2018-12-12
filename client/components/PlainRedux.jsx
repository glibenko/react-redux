import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {
  fetchPlane,
  fetchPlaneLoading,
  fetchPlaneError,
} from '../actions';

export class PlainRedux extends Component {
  fetchData = () => {
    const { data, setLoading, setError } = this.props;
    setLoading(true);
    axios.get('https://picsum.photos/200/200/?random', {
      responseType: 'blob',
    })
      .then(res => {
        // throw 'Parameter is not a number!';
        setTimeout(() => {
          data(res.request.responseURL);
          setLoading(false);
        }, 3000);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }

  handler = () => {
    this.fetchData();
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const {
      containerBlock,
      name,
      btn,
      img,
      loading,
      error,
    } = this.props;

    return (
      <div
        style={containerBlock}
      >
        <div style={name}> Redux </div>
        {loading
          ? (
            <div
              style={btn}
            >
              loading...
            </div>
          )
          : (
            <div
              onClick={this.handler}
              onKeyDown={this.handler}
              style={btn}
            >
              get img
            </div>
          )
        }
        {!error && img && <img src={img} alt="" />}
        {error && <div> Error </div>}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    img: state.reduxPlane.img,
    loading: state.reduxPlane.loading,
    error: state.reduxPlane.error,
  }
);

const mapDispatchToProps = dispatch => (
  {
    data: img => dispatch(fetchPlane(img)),
    setLoading: boolean => dispatch(fetchPlaneLoading(boolean)),
    setError: boolean => dispatch(fetchPlaneError(boolean)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PlainRedux);
