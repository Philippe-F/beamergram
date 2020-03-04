import React from "react";
import { Route } from "react-router-dom"; 
import SignUpContainer from "./session/signup_container"; 
import LogInContainer from './session/login_container';
import GreetingContainer from "./greeting/greeting_container";


const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Beamergram</h1>
      </Link>
      <GreetingContainer />
    </header>
    <Route path="/login" component={LogInContainer} />
    <Route path="/signup" component={SignUpContainer} />
  </div>
);

export default App; 