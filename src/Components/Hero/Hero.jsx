import React from 'react'
import './Hero.css'
import Navbar from '../Navbar/Navbar'
import profile_pic from '../../assets/obawole_profile_pic.jpg'
import arrow_icon from '../../assets/arrow-icon.png'
import '../../App'

const Hero = () => {
  return (
    <>
    <Navbar />

      <div className='intro' id='home-section'>

      <section id='intro'>

        <div className="introContent">  

          <span className="hello">Hello there,</span>

          <span className="introText">
            I'm <span className='introName'>Lovelyn</span><br />
          </span>
          <span className='introRole'>Business growth strategist <br /> and Copywriter</span>

          <p className="introPara"> 
            Whether it’s writing high-converting 
            copy, designing a funnel that captures<br /> and converts, or building a strategy that 
            scales, I focus on one thing: <br />helping businesses sell more and grow faster.</p>
          
          <a href="#projects-section" id='works-button'>
            <button className='more-button'>
             My works
            <img src={arrow_icon} alt="" />
            </button>
          </a>
          
        </div>

        <div className='image'>
          <img src={profile_pic} alt="profile picture" />
        </div>
      
      </section>
    </div>
    </>
  )
}

export default Hero
