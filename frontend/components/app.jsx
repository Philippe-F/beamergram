import React from "react";
import { AuthRoute } from "../utils/route_util";
import { Route } from "react-router-dom";
import SignUpContainer from "./session/signup_container"; 
import LogInContainer from "./session/login_container";
import GreetingContainer from "./greeting/greeting_container";


const App = () => (
  <div className="main-page"> 
  
    <GreetingContainer />

    <AuthRoute exact path="/" component={SignUpContainer} />
    <AuthRoute exact path="/login" component={LogInContainer} />
  </div>
);

export default App; 