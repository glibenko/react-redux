import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saga } from '../actions';

export class ReduxSaga extends Component {
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
      img,
      loading,
      error,
    } = this.props;

    return (
      <div
        style={containerBlock}
      >
        <div style={name}> Redux Saga</div>
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
    img: state.reduxSaga.img,
    loading: state.reduxSaga.loading,
    error: state.reduxSaga.error,
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchData: () => dispatch(saga()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ReduxSaga);
