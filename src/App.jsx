import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Components/Header';
import Technologies from './Components/Technologies';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  

  return (
    <>
      <div className='app-container'>
        <Header/>
        <Technologies/>
        <Projects/>
        <Contact/>
      </div>
      
    </>
  )
}

export default App
