import React from "react";
import ReactDOM from "react-dom";
import {ThemeProvider} from "styled-components";
import theme from "./utils/theme";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
