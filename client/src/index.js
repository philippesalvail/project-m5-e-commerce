import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store";
import { Provider } from "react-redux";

import App from "./components/App";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
