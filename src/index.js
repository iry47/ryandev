import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assets/font-awesome/css/all.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import dotenv from "dotenv";
dotenv.config();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const APIKEY = process != undefined ? process.env.REACT_APP_APIKEY : "";
const AUTHDOMAIN = process != undefined ? process.env.REACT_APP_AUTHDOMAIN : "";
const PROJECTID = process != undefined ? process.env.REACT_APP_PROJECTID : "";
const STORAGEBUCKET =
  process != undefined ? process.env.REACT_APP_STORAGEBUCKET : "";
const MESSAGINGSENDERID =
  process != undefined ? process.env.REACT_APP_MESSAGINGSENDERID : "";
const APPID = process != undefined ? process.env.REACT_APP_APPID : "";
const MEASUREMENTID =
  process != undefined ? process.env.REACT_APP_MEASUREMENTID : "";

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const engine = new Styletron();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
