import React, {useState} from "react";
import {Calculator, Start, Charts, News} from "./pages";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Navigation} from "./components";
import GlobalStyles from "./App.css.js";

function App() {
  const [active, setActive] = useState(true);

  return (
    <>
      <GlobalStyles />

      {active ? (
        <Start getStart={() => setActive(false)} />
      ) : (
        <Router>
          <Switch>
            <Route exact path="/" component={Calculator} />
            <Route path="/charts" component={Charts} />
            <Route path="/news" component={News} />
          </Switch>
          <Navigation
            items={[
              {content: "Exchange", to: "/"},
              {content: "Charts", to: "/charts"},
              {content: "News", to: "/News"},
            ]}
          />
        </Router>
      )}
    </>
  );
}

export default App;
