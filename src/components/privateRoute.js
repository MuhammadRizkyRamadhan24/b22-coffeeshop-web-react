/* eslint-disable */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

const privateRoute = ({ children, auth, ...rest }) => {
  const { token } = auth;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token !== null) {
          return (children);
        }
        return (<Redirect to="/login" />);
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(privateRoute);
