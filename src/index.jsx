import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch,BrowserRouter } from "react-router-dom";

import indexRoutes from "./routes/routes.jsx";

import "./assets/scss/material-kit-react.css";

ReactDOM.render(
  <BrowserRouter >
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </BrowserRouter>,
  document.getElementById("app")
);
