import React from 'react';
import {Switch, Route} from "react-router-dom"
import Tweeter from "./Components/Tweeter"
import Support from "./Components/Support"
import Nav from "./Components/Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path= "/">
          <Tweeter />
        </Route>
        <Route path= "/support">
          <Support />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
