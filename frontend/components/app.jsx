import React from "react";
import { AuthRoute } from "../utils/route_util";
import SignUpContainer from "./session/signup_container"; 
import LogInContainer from "./session/login_container";
import GreetingContainer from "./greeting/greeting_container";


const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Beamergram</h1>
      </Link>
      <GreetingContainer />
    </header>
    <AuthRoute exact path="/login" component={LogInContainer} />
    <AuthRoute exact path="/signup" component={SignUpContainer} />
  </div>
);

export default App; 