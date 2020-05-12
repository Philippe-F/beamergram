import React from "react";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import { Switch, Redirect } from "react-router-dom";
import SignUpContainer from "./session/signup_container"; 
import LogInContainer from "./session/login_container";
import GreetingContainer from "./greeting/greeting_container";
import PostIndexContainer from "./posts/post_index_container";
import PostShowContainer from "./posts/post_show_container";
import CreatePostFormContainer from "./posts/create_post_form_container";
import EditPostFormContainer from "./posts/edit_post_form_container";


const App = () => (
  <div className="main-page"> 
  
    <Switch>
      <AuthRoute path="/signup" component={SignUpContainer} />
      <AuthRoute path="/login" component={LogInContainer} />
      <ProtectedRoute path="/posts/explore" component={PostIndexContainer} /> 
      <ProtectedRoute path="/posts/:postId/show" component={PostShowContainer} />  
      <ProtectedRoute path="/posts/new" component={CreatePostFormContainer} />  
      <ProtectedRoute path="/posts/:postId/edit" component={EditPostFormContainer} /> 
      <Redirect to="/posts/explore" /> 
    </Switch>
  </div>
);

export default App; 