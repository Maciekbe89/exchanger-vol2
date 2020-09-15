import React from "react";
import {Select} from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <input
        type="number"
        placeholder="amount"
        onChange={(e) => e.target.value}
      />
      <Select label="From:" />
      <Select label="To:" />
    </div>
  );
}

export default App;
