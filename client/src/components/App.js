import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

import Cart from "./Cart/index";
import Header from "./Header";
import LandingPage from "./LandingPage";
import ProductDetails from "./ProductDetail";
import ConfirmationPage from "./ConfirmationPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route exact path="/item/:itemId">
            <ProductDetails />
          </Route>
          <Route exact path="/confirmation-page/:orderId">
            <ConfirmationPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
