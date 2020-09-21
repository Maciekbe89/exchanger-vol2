import React from "react";
import {Calculator, Start} from "./pages";
import GlobalStyles from "./App.css.js";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Start />
        {/* <Calculator /> */}
      </div>
    </>
  );
}

export default App;
