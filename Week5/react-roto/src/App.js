import React from 'react';
import {Switch, Route} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path= "/">
          <Home />
        </Route>
        <Route path= "/about">
          <About />
        </Route>
        <Route to= "/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
