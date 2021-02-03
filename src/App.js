import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SelectedDate from "./components/SelectedDate";

const App = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const requestUrl = `http://history.muffinlabs.com/date/${mm}/${dd}`;

  useEffect(() => {
    const fetchDate = async () => {
      return axios(proxyurl + requestUrl)
        .then(({ data }) => {
          console.log("SUCCESS!", data);
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log("Err:", err);
        });
    };
    fetchDate();
  }, [requestUrl]);

  if (!data) return null;
  if (loading) return "Loading...";

  const {
    date,
    url,
    data: { Births, Deaths, Events },
  } = data;

  return (
    <div className="App">
      This is our 'Today in History App'
      <SelectedDate
        date={date}
        url={url}
        births={Births}
        deaths={Deaths}
        events={Events}
      />
    </div>
  );
};

export default App;
