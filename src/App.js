import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

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

  console.log(facts);
  // useEffect(() => {
  //   axios.get(`http://history.muffinlabs.com/date`)
  //   .then(res => {
  //     const facts = res.data;
  //     setHistoricMoments({facts})
  //   }).catch((err) => {
  //     console.log("Error: ", err)
  //   });
  // });

  return (
    <div className="App">
      <ul>{/* {historicMoments.facts.map(date => <li>{date.data}</li>)} */}</ul>
    </div>
  );
};

export default App;
