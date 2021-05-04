import { React } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Profile from "./views/Profile/Profile";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
