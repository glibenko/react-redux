import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadThunk } from '../actions';

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
      img,
      loading,
      error,
    } = this.props;

    return (
      <div
        style={containerBlock}
      >
        <div style={name}> Redux Thunk</div>
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
    img: state.reduxThunk.img,
    loading: state.reduxThunk.loading,
    error: state.reduxThunk.error,
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchData: () => dispatch(loadThunk()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ThunkRedux);
