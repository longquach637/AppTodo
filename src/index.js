import React from "react";
import ReactDOM from "react-dom";
import App from "./view/App";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.scss";
import { Provider } from "react-redux";
// const reduxStore = createStore(rootReducers);
// const reduxStore = createStore(
//   rootReducers,
//   window.__REDUX_DEVTOOL_EXTENSTION__ && window.__REDUX_DEVTOOL_EXTENSTION__()
// );

import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();