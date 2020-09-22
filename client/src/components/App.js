import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

import Cart from "./Cart/index";
import Header from "./Header";
import LandingPage from "./LandingPage";
import ProductDetails from "./ProductDetails";
import AuthenticatedRoute from "./AuthenticatedRoute";
import ConfirmationPage from "./ConfirmationPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />

      <Switch>
        <AuthenticatedRoute exact path="/" component={LandingPage} />
        <AuthenticatedRoute path="/cart" component={Cart} />
        <AuthenticatedRoute
          exact
          path="/item/:itemId"
          component={ProductDetails}
        />
        {/* <ProductDetails />
          </Route> */}
        <Route path="/confirmationPage" component={ConfirmationPage} />
      </Switch>
    </>
  );
}

export default App;
