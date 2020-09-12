import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

import Cart from "./Cart";
import Header from "./Header";
import LandingPage from "./LandingPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
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
