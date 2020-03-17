import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/RobotoCondensed-Regular.ttf";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ServiceProvider } from "./components/service-context";

import ErrorBoundry from "./components/error-boundry";
import App from "./components/app";

import api from "./service/http";

ReactDOM.render(
  <ErrorBoundry>
    <ServiceProvider value={api}>
      <Router>
        <App />
      </Router>
    </ServiceProvider>
  </ErrorBoundry>,

  document.getElementById("root")
);
