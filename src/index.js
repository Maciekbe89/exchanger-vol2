import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import {ThemeProvider} from "styled-components";
import theme from "./utils/theme";
import {Loading} from "./components";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense fillback={<Loading />}>
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
