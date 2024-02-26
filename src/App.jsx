import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
