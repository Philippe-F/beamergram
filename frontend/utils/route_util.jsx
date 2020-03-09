import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    )}
  />
);

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/post/explore" />
      )
  )} />
);


const mapStateToProps = (state) => (
  { loggedIn: Boolean(state.session.id) }
);

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));