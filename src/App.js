import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />
      </Switch>
    </Router>
  );
}

export default App;
