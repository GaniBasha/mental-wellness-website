// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      {/* basename fixes 404 on GitHub Pages */}
      <BrowserRouter basename="/mental-wellness-website">
        <App />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
