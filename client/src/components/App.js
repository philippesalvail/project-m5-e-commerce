import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

import Cart from "./Cart";
import LandingPage from "./LandingPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Cart />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
