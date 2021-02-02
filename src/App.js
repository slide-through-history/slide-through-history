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

  let API_KEY = "xshJaXRkxWNATu6iyoouFH1Kl7i3uWIG";

  document.addEventListener("DOMContentLoaded", init);
  function init() {
    document.getElementById("btnSearch").addEventListener("click", (ev) => {
      ev.preventDefault(); //to stop the page reload
      let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=1&q=`;
      let str = document.getElementById("search").value.trim();
      url = url.concat(str);
      console.log(url);
      fetch(url)
        .then((response) => response.json())
        .then((content) => {
          //  data, pagination, meta
          console.log("GIF DATA", content.data);
          console.log("META", content.meta);
          // here we build the HTML elements using the DOM
          let fig = document.createElement("figure");
          let img = document.createElement("img");
          // let figCaption = document.createElement("figcaption");
          img.src = content.data[0].images.downsized.url;
          img.alt = content.data[0].title;
          // figCaption.textContent = content.data[0].title;
          fig.append(img);
          // fig.append(figCaption);
          let gifContainer = document.querySelector(".gifContainer");
          gifContainer.insertAdjacentElement("afterbegin", fig);
          document.querySelector("#search").value = "";
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }

  return (
    <div>
      <Router>
        <div>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/signup" component={Signup} /> */}
          </Switch>
        </div>
      </Router>
      <main className="App">
        <h1>This is our 'Today in History App'</h1>
          <div>
            <form>
              <label for="search">Search</label>
              <input id="search" type="search" />
              <button id="btnSearch">Go</button>
            </form>
          <div class="gifContainer"></div>
        </div>
    </main>
    </div>
  );
};

export default App;
