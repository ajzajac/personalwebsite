import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage, { homePage } from './components/HomePage'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './components/Projects'
import Contact from './components/Contact'



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
        <Router>
          <Switch>
            <Route exact path="/"><HomePage></HomePage></Route>
            <Route exact path='/about'><HomePage></HomePage></Route>
            <Route exact path='/projects'><Projects></Projects></Route>
            <Route exact path='/contact'><Contact></Contact></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
