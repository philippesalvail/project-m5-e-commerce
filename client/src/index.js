import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./reducers/cartReducer";

import App from "./components/App";

const store = createStore(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
