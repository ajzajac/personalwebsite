import React from 'react';
import './App.css';
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'


function App() {
  return (
    <div className="App">
        <NavBar />
        <HomePage />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
