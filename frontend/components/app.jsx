import React from "react";
import { AuthRoute } from "../utils/route_util";
import { Route } from "react-router-dom";
import SignUpContainer from "./session/signup_container"; 
import LogInContainer from "./session/login_container";
import GreetingContainer from "./greeting/greeting_container";


const App = () => (
  <div>
    <header>
        <h1>Beamergram</h1>
      <GreetingContainer />
    </header>
    <Route path="/login" component={LogInContainer} />
    <Route path="/signup" component={SignUpContainer} />
  </div>
);

export default App; 