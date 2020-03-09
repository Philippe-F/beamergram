import React from "react";
import { AuthRoute } from "../utils/route_util";
import { Route, Switch } from "react-router-dom";
import SignUpContainer from "./session/signup_container"; 
import LogInContainer from "./session/login_container";
import GreetingContainer from "./greeting/greeting_container";
import PostIndexContainer from "./posts/post_index_container";
import PostShowContainer from "./posts/post_show_container";
import CreatePostFormContainer from "./posts/create_post_form_container";
import EditPostFormContainer from "./posts/edit_post_form_container";


const App = () => (
  <div className="main-page"> 
  
    <GreetingContainer />
    <Switch>
      <AuthRoute exact path="/" component={SignUpContainer} />
      <AuthRoute exact path="/login" component={LogInContainer} />
      <Route path="/posts/explore" component={PostIndexContainer} /> 
      <Route path="/posts/:postId/show" component={PostShowContainer} />  
      <Route path="/posts/new" component={CreatePostFormContainer} />  
      <Route path="/posts/:postId/edit" component={EditPostFormContainer} />  
    </Switch>
  </div>
);

export default App; 