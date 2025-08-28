import React, { useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
