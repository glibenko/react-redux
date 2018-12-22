// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadThunk } from '../actions';

import styles from './index.css';

type State = {
  reduxThunk: {
    img: string,
    loading: boolean,
    error: boolean
  }
};

const mapStateToProps = (state: State) => (
  {
    img: state.reduxThunk.img,
    loading: state.reduxThunk.loading,
    error: state.reduxThunk.error,
  }
);

type Dispatch = (action: Function) => any;

const mapDispatchToProps = (dispatch: Dispatch) => (
  {
    fetchData: () => dispatch(loadThunk()),
  }
);

type Props = {
  img: string,
  loading: boolean,
  error: boolean,
  fetchData: Function
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ThunkRedux extends Component<Props> {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  handler = () => {
    const { fetchData } = this.props;
    fetchData();
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

