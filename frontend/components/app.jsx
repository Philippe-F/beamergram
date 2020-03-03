import React from "react";
import { Route } from "react-router-dom"; 
import SignupContainer from "./session/signup_container"; 


const App = () => (
  <div>
    <header>
      <h1>Beamergram</h1>
    </header>
    <Route path="/signup" component={SignupContainer} />
  </div>
);

export default App; 