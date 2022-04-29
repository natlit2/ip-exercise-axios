import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const env = process.env.REACT_APP_API_KEY;
const API = "https://geo.ipify.org/api/v2/country?apiKey=" + env;
