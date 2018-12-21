import React, { Component } from 'react';
import { connect } from 'react-redux';
import action from './action';

import styles from './index.css';

import {
  fetchPlane,
  fetchPlaneLoading,
  fetchPlaneError,
} from '../actions';

export class PlainRedux extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { data, setLoading, setError } = this.props;
    action().then((res) => {
      if (res.request.responseURL) {
        data(res.request.responseURL);
        console.log('yup', res.request.responseURL)
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    });
  }

  handler = () => {
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
      <div className={styles.block}>
        <div className={styles.name}> Redux </div>
        {loading
          ? <div className={styles.btn}> loading... </div>
          : (
            <div onClick={this.handler} onKeyDown={this.handler} className={styles.btn} role="button" tabIndex="0">
                get img
            </div>
          )
        }
      {console.log('!error && img ', error, img )}
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
