import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import MainTopBar from "./components/top-bar/main-top-bar";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainTopBar />
  </React.StrictMode>
);
