import React from 'react';
import Header from './Components/Header';
import Howitwork from './Components/Howitwork';
import About from './Components/About';
import Agent from './Components/Agent';
import Properties from './Components/Properties';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Howitwork></Howitwork>
      <About></About>
      <Agent></Agent>
      <Properties></Properties>
      <Contact></Contact>
    </div>
  );
}

export default App;
