import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"

// can import bootstrap here for additional styling
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
