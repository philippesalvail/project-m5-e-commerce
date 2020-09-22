import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./components/Auth0Provider";
//  import "bootstrap/dist/css/bootstrap.css";

import App from "./components/App";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
