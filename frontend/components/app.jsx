import React from "react";
import { Route } from "react-router-dom"; 
import SignupContainer from "./session/signup_container"; 
import GreetingContainer from "./greeting/greeting_container";


const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Beamergram</h1>
      </Link>
      <GreetingContainer />
    </header>
    <Route path="/signup" component={SignupContainer} />
  </div>
);

export default App; 