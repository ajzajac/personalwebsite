import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage, { homePage } from './components/HomePage'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
        <HomePage />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
