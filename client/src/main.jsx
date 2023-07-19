import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import store from "./Redux/store.js";
import { Provider } from "react-redux";

// axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.baseURL = "https://dogs-pi-production-0dfe.up.railway.app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
