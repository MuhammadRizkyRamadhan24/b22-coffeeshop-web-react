import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

const PrivateRoute = ({ children, auth, ...rest }) => {
  const { token } = auth;
  return (
    <Route
      {...rest}
      render={() => {
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

export default connect(mapStateToProps)(PrivateRoute);
