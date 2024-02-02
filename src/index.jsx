import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./routes";
import store from "./helpers/store";
import "./styles/index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
