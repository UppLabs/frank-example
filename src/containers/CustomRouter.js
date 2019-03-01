import React, { Component } from 'react';
import { Router, Reducer } from 'react-native-router-flux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CustomRouter extends Component {
  reducerCreate (params) {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
      this.props.dispatch(action);
      return defaultReducer(state, action);
    };
  }

  render () {
    return (
      <Router createReducer={this.reducerCreate.bind(this)} >
        {this.props.children}
      </Router>
    );
  }
}

export default connect()(CustomRouter);

CustomRouter.propTypes = {
  dispatch: PropTypes.func,
  children: PropTypes.object
}