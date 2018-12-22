// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saga } from '../actions';

import styles from './index.css';

type State = {
  reduxSaga: {
    img: string,
    loading: boolean,
    error: boolean
  }
};

const mapStateToProps = (state: State) => (
  {
    img: state.reduxSaga.img,
    loading: state.reduxSaga.loading,
    error: state.reduxSaga.error,
  }
);

type Dispatch = (action: Function) => any;

const mapDispatchToProps = (dispatch: Dispatch) => (
  {
    fetchData: () => dispatch(saga()),
  }
);

type Props = {
  img: string,
  loading: boolean,
  error: boolean,
  fetchData: Function
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ReduxSaga extends Component<Props> {
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
