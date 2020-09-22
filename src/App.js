import React, {useState} from "react";
import {Calculator, Start} from "./pages";
import GlobalStyles from "./App.css.js";

function App() {
  const [active, setActive] = useState(true);

  return (
    <>
      <GlobalStyles />
      <div className="App">
        {active ? <Start getStart={() => setActive(false)} /> : <Calculator />}
      </div>
    </>
  );
}

export default App;
