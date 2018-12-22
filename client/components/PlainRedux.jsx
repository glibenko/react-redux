// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import action from './action';
import {
  fetchPlane,
  fetchPlaneLoading,
  fetchPlaneError,
} from '../actions';

import styles from './index.css';

type State = {
  reduxPlane: {
    img: string,
    loading: boolean,
    error: boolean
  }
};

const mapStateToProps = (state: State) => (
  {
    img: state.reduxPlane.img,
    loading: state.reduxPlane.loading,
    error: state.reduxPlane.error,
  }
);

type Dispatch = (action: Function) => any;

const mapDispatchToProps = (dispatch: Dispatch) => (
  {
    data: (img: string) => dispatch(fetchPlane(img)),
    setLoading: (boolean: boolean) => dispatch(fetchPlaneLoading(boolean)),
    setError: (boolean: boolean) => dispatch(fetchPlaneError(boolean)),
  }
);

type Props = {
  img: string,
  loading: boolean,
  error: boolean,
  data: Function,
  setLoading: Function,
  setError: Function
}

@connect(mapStateToProps, mapDispatchToProps)
export default class PlainRedux extends Component<Props> {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { data, setLoading, setError } = this.props;
    action()
      .then((res) => {
        if (res.request.responseURL) {
          data(res.request.responseURL);
          setLoading(false);
        } else {
          setLoading(false);
          setError(true);
        }
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }

  handler = () => {
    this.fetchData();
  }

  render() {
    const { img, loading, error } = this.props;

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
        {!error && img && <img src={img} alt="" />}
        {error && <div> Error </div>}
      </div>
    );
  }
}
