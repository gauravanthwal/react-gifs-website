import "./App.css"
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'



function App(){
    return (
      <>
        <Router>
            <Navbar />
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/about' exact>
              <About />
            </Route>
          </Switch>
        </Router>
      </>
    );
}
export default App;