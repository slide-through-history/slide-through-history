import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

// import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
// import Signup from "./views/Signup/Signup";

const App = () => {
  const [facts, setFacts] = useState();

  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const requestUrl = `http://history.muffinlabs.com/date/${mm}/${dd}`;

  useEffect(() => {
    const fetchFacts = async () => {
      const result = await axios(proxyurl + requestUrl)
        .then((res) => {
          console.log("SUCCESS!", res);
          return setFacts(result.data);
        })
        .catch((err) => {
          console.log("Err:", err);
        });
    };
    fetchFacts();
  }, []);

  return (
    <div>
      <Router>
        <div>
          <div className="App">This is our 'Today in History App'</div>;
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/signup" component={Signup} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
