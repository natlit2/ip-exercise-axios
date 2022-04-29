import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PigeonMap from "./PigeonMap";

const env = process.env.REACT_APP_API_KEY;
const API = "https://geo.ipify.org/api/v2/country?apiKey=" + env;

export default function GetIP() {
  //creating IP state
  const [ipData, setIpData] = useState("");

  const getAPIdata = () => {
    axios
      .get(API)
      .then((response) => {
        console.log(response.data);
        setIpData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    //     return {
    //       ip: "86.56.37.245",
    //       location: {
    //         country: "DE",
    //         region: "Thuringia",
    //         timezone: "+02:00",
    //       },
    //       as: {
    //         asn: 20880,
    //         name: "TELECOLUMBUS",
    //         route: "86.56.0.0/17",
    //         domain: "http://www.telecolumbus.de",
    //         type: "Cable/DSL/ISP",
    //       },
    //       isp: "Tele Columbus AG",
    //     };
  };

  useEffect(() => {
    getAPIdata();
  }, []);

  console.log(ipData);
  return (
    ipData && (
      <div>
        <h1>My Public IP is: {ipData.ip}</h1>
        <h1>I am in: {ipData.location.country}</h1>
      </div>
    )
  );
}
