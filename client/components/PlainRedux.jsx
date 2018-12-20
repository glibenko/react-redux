import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {
  fetchPlane,
  fetchPlaneLoading,
  fetchPlaneError,
} from '../actions';

export class PlainRedux extends Component {
  fetchData = async () => {
       const {
      containerBlock,
      name,
      btn,
      img,
      loading,
      error,
    } = this.props;
    const { data, setLoading, setError } = this.props;
    console.log('object', loading);
    setLoading(true);
    try {
       console.log('object-2');
      const res = await axios.get('https://picsum.photos/200/200/?random', { responseType: 'blob' });
      console.log('object-3', res);
      // setTimeout(() => {

        data(res.request.responseURL);
        setLoading(false);
        console.log('object-4', loading);
      // }, 3000);
    } catch (err) {
       console.log('object-5');
      setLoading(false);
      setError(true);
      console.log('fetchData err', err);
    }
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
