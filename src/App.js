import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const env = process.env.REACT_APP_API_KEY;
const API = "https://geo.ipify.org/api/v2/country?apiKey=" + env;

function App() {
  //creating IP state
  const [apiRes, setApiRes] = useState("");

  const getIpData = () => {
    // axios.get(API).then((response) => {
    //   console.log(response.data);
    //   setApiRes(response.data);
    //});
    return {
      ip: "86.56.37.245",
      location: {
        country: "DE",
        region: "Thuringia",
        timezone: "+02:00",
      },
      as: {
        asn: 20880,
        name: "TELECOLUMBUS",
        route: "86.56.0.0/17",
        domain: "http://www.telecolumbus.de",
        type: "Cable/DSL/ISP",
      },
      isp: "Tele Columbus AG",
    };
  };

  useEffect(() => {
    getIpData();
  }, []);

  return (
    <div className="App">
      <h1>{apiRes.ip}</h1>
      <h1>{apiRes.location.country}</h1>
    </div>
  );
}

export default App;
